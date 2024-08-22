import { produce } from 'immer'
import { OrderProps } from "../../pages/cart"
import { Actions, ActionTypes } from "./actions"

export interface CartItem {
  id: string
  quantity: number
}

export interface Order extends OrderProps {
  id: number
  items: CartItem[]
}

interface CartState {
  cartItems: CartItem[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cartItems.find(
          (item) => item.id === action.payload.newItem.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.newItem.quantity
        } else {
          draft.cartItems.push(action.payload.newItem)
        }
      })

    case ActionTypes.REMOVE_ITEM_FROM_CART:
      return produce(state, (draft) => {
        const itemToIncrementId = draft.cartItems.findIndex(
          (item) => item.id === action.payload.itemId
        )
        draft.cartItems.splice(itemToIncrementId, 1)
      })

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cartItems.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToDecrement?.id && itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1
        }
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cartItems.find(
          (item) => item.id === action.payload.itemId,
        )

        if (itemToIncrement?.id) {
          itemToIncrement.quantity += 1
        }
      })

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cartItems,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cartItems = []

        action.payload.callback(`/order/${newOrder.id}/success`)
      })

      default:
        return state
  }
}