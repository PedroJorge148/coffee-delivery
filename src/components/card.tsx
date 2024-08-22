import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "./form/quantity-input";
import { useCart } from "../context/cart-context";
import { useState } from "react";
import toast from "react-hot-toast";
interface CoffeeProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useCart()

  function addCoffeeToCart() {
    addToCart({
      id: coffee.id,
      quantity,
    })
    toast.success('Seu café foi adicionado ao carrinho!')
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  function incrementQuantity() {
    setQuantity(state => state + 1)
  }
    
  return (
    <div className="w-64 flex flex-col items-center justify-center text-center bg-basecard rounded-md rounded-se-3xl rounded-es-3xl px-5 pb-5">
      <img src={coffee.image} alt="" className="-mt-5" />
      <div className="flex items-center gap-1">
        {coffee.tags.map((tag, i) => (
          <div key={i} className="mt-4 bg-yellowligth rounded-full text-yellowdark px-2 py-1 uppercase font-bold text-[0.625rem] text-center">
            {tag}
          </div>
        ))}
      </div>

      <h3 className="mt-4 font-alt text-xl text-basesubtitle font-extrabold">{coffee.title}</h3>
      <span className="mt-2 text-baselabel text-sm">{coffee.description}</span>

      <div className="mt-8 flex items-center justify-between w-full px-2">
        <div className="flex items-baseline gap-1 text-basetext">
          <span className="text-sm leading-tight">R$</span>
          <span className="font-alt font-extrabold text-2xl">9,90</span>
        </div>

        <div className="flex items-center gap-2">
          <QuantityInput 
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
          <button 
            className="bg-purpledark flex items-center justify-center rounded-md p-2 transition-colors hover:bg-purple"
            onClick={addCoffeeToCart}
          >
            <ShoppingCart className="size-5 text-basecard" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}