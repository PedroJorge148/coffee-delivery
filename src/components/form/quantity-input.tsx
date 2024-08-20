import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <div className="bg-basebutton px-3 py-1.5 flex items-center gap-2 rounded-md text-purple">
      <button type="button" className="text-xl">
        <Minus className="size-3" weight="bold" />
      </button>
      <span className="text-basetitle ">1</span>
      <button type="button">
        <Plus className="size-3" weight="bold" />
      </button>
    </div>
  )
}