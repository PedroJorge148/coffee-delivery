import { Minus, Plus } from "phosphor-react";
interface QuantityInputProps {
  quantity: number
  decrementQuantity: () => void
  incrementQuantity: () => void
}

export function QuantityInput({ quantity, decrementQuantity, incrementQuantity }: QuantityInputProps) {
  return (
    <div className="bg-basebutton px-3 py-1.5 flex items-center gap-2 rounded-md text-purple">
      <button type="button" className="transition-colors hover:text-purpledark" onClick={decrementQuantity}>
        <Minus className="size-3" weight="bold" />
      </button>
      <span className="text-basetitle">{quantity}</span>
      <button type="button" className="transition-colors hover:text-purpledark" onClick={incrementQuantity}>
        <Plus className="size-3" weight="bold" />
      </button>
    </div>
  )
}