import { Trash } from "phosphor-react";
import { QuantityInput } from "../components/form/quantity-input";
import { useCart } from "../context/cart-context";

interface CartItem {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity: number
  }
}

export function CartItem({ coffee }: CartItem) {
  const { decrementQuantity, incrementQuantity, removeFromCart } = useCart()

  function handleDecrementQuantity() {
    decrementQuantity(coffee.id)
  }

  function handleIncrementQuantity() {
    incrementQuantity(coffee.id)
  }

  function handleRemoveFromCart() {
    removeFromCart(coffee.id)
  }

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <img src={coffee.image} alt={coffee.title} className="size-16" />
        <div className="flex flex-col gap-2">
          <span className="text-basesubtitle">{coffee.title}</span>
          <div className="flex items-center gap-2">
            <QuantityInput 
              quantity={coffee.quantity}
              decrementQuantity={handleDecrementQuantity}
              incrementQuantity={handleIncrementQuantity}
            />
            <button 
              type="button" 
              className="flex items-center w-full gap-2 bg-basebutton uppercase p-2 rounded-md"
              onClick={handleRemoveFromCart}
            >
              <Trash className="size-4 text-purple" />
              <span className="text-xs">REMOVER</span>
            </button>
          </div>
        </div>
      </div>
      <span className="font-bold">R$ {coffee.price.toFixed(2).replace('.', ',')}</span>
    </div>
  );
}
