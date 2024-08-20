import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "./form/quantity-input";

export function Card() {
  return (
    <div className="w-64 flex flex-col items-center justify-center text-center bg-basecard rounded-md rounded-se-3xl rounded-es-3xl px-5 pb-5">
      <img src="/coffees/americano.svg" alt="" className="-mt-5" />
      <div className="flex items-center gap-1">
        <div className="mt-4 bg-yellowligth rounded-full text-yellowdark px-2 py-1 uppercase font-bold text-[0.625rem] text-center">
          Tradicional
        </div>
        <div className="mt-4 bg-yellowligth rounded-full text-yellowdark px-2 py-1 uppercase font-bold text-[0.625rem] text-center">
          Com leite
        </div>
      </div>

      <h3 className="mt-4 font-alt text-xl text-basesubtitle font-extrabold">Expresso Americano</h3>
      <span className="mt-2 text-baselabel text-sm">Expresso diluído, menos intenso que o tradicional</span>

      <div className="mt-8 flex items-center justify-between w-full px-2">
        <div className="flex items-baseline gap-2 text-basetext">
          <span className="text-sm leading-tight">R$</span>
          <span className="font-alt font-extrabold text-2xl">9,90</span>
        </div>

        <div className="flex items-center gap-2">
          <QuantityInput />
          <button className="bg-purpledark flex items-center justify-center rounded-md p-2">
            <ShoppingCart className="size-5 text-basecard" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}