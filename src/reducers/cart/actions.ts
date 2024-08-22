import { NavigateFunction } from "react-router-dom";
import { OrderProps } from "../../pages/cart";
import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART'
}

export function addItemToCartAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      newItem,
    }
  } as const
}

export function removeItemFromCartAction(itemId: CartItem['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    }
  } as const
}

export function decrementItemQuantityAction(itemId: CartItem['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    }
  } as const
}

export function incrementItemQuantityAction(itemId: CartItem['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    }
  } as const
}

export function checkoutCartAction(
  order: OrderProps,
  callback: NavigateFunction
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    }
  } as const 
}

export type Actions =
  | ReturnType<typeof addItemToCartAction>
  | ReturnType<typeof removeItemFromCartAction>
  | ReturnType<typeof decrementItemQuantityAction>
  | ReturnType<typeof incrementItemQuantityAction>
  | ReturnType<typeof checkoutCartAction>;