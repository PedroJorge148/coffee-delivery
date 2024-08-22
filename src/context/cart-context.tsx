import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { OrderProps } from "../pages/cart";
import { CartItem, cartReducer, Order } from "../reducers/cart/reducer";
import { addItemToCartAction, checkoutCartAction, decrementItemQuantityAction, incrementItemQuantityAction, removeItemFromCartAction } from "../reducers/cart/actions";
interface CartContextType {
  cartItems: CartItem[]
  orders: Order[]
  addToCart: (newItem: CartItem) => void
  removeFromCart: (id: string) => void
  decrementQuantity: (id: string) => void
  incrementQuantity: (id: string) => void
  checkout: (data: OrderProps) => Promise<void>
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartItems: [],
      orders: [],
    },
    (cartInitiaState) => {
      const storedCartState = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      )

      if (storedCartState) {
        return JSON.parse(storedCartState)
      }
      
      return cartInitiaState
    }
  )

  const navigate = useNavigate()
  const { cartItems, orders } = cartState

  function addToCart(newItem: CartItem) {
    dispatch(addItemToCartAction(newItem))
  }

  function removeFromCart(itemId: string) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function decrementQuantity(itemId: string) {
   dispatch(decrementItemQuantityAction(itemId))
  }

  function incrementQuantity(itemId: string) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  async function checkout(data: OrderProps) {
   dispatch(checkoutCartAction(data, navigate))
  }

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:cart-state-1.0.0', JSON.stringify(cartState)
    )
  }, [cartState])

  return (
    <CartContext.Provider value={{
      cartItems,
      orders,
      addToCart,
      removeFromCart,
      decrementQuantity,
      incrementQuantity,
      checkout
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)