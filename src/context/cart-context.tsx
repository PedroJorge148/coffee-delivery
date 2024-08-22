import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface CartItem {
  id: string
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (itemToAdd: CartItem) => void
  removeFromCart: (id: string) => void
  decrementQuantity: (id: string) => void
  incrementQuantity: (id: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedItems = localStorage.getItem('@coffee-delivery:cart-items-1.0.0')

    return storedItems ? JSON.parse(storedItems) : []
  })

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(newItem: CartItem) {
    setCartItems(currentCart => {
      const existingItem = currentCart.find((item) => item.id === newItem.id)

      return existingItem
        ? currentCart.map((cartItem) =>
          cartItem.id === newItem.id
            ? { ...cartItem, quantity: newItem.quantity }
            : cartItem
        )
        : [...currentCart, newItem];
    })
  }

  function removeFromCart(id: string) {
    setCartItems(state => {
      return state.filter(item => item.id !== id)
    })
  }

  function decrementQuantity(id: string) {
    setCartItems(currentCart => {
      const existingItem = currentCart.find((item) => item.id === id)

      if (existingItem && existingItem.quantity <= 1) {
        return currentCart
      }

      return currentCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    })
  }


  function incrementQuantity(id: string) {
    setCartItems(currentCart => {
      return currentCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    })
  }

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, decrementQuantity, incrementQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)