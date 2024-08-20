import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { QuantityInput } from "../components/form/quantity-input";

export function Cart() {
  return (
    <div className="mx-auto grid grid-cols-5 gap-8 px-4 py-10 w-full max-w-[1160px]">
      <div className="col-span-3 space-y-4">
        <h2 className="font-alt font-bold text-basesubtitle text-lg">Complete seu pedido</h2>
        <div className="space-y-3">
          <div className="bg-basecard p-10 rounded-md space-y-8">
            <div className="flex items-start gap-2">
              <MapPinLine className="size-6 text-yellowdark" />
              <div className="flex flex-col">
                <span className="text-basesubtitle font-medium">Endereço de Entrega</span>
                <span className="text-basetext text-sm">Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="w-52 bg-baseinput border border-basebutto text-sm rounded-md p-3">
                <input type="number" placeholder="CEP" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
              </div>
              <div className="w-full bg-baseinput border border-basebutton text-sm rounded-md p-3">
                <input type="text" placeholder="Rua" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
              </div>
              <div className="flex gap-3">
                <div className="min-w-52 bg-baseinput border border-basebutton text-sm rounded-md p-3">
                  <input type="number" placeholder="Número" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
                </div>
                <div className="flex items-center gap-0.5 w-full bg-baseinput border border-basebutton text-sm rounded-md p-3">
                  <input type="text" placeholder="Complemento" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
                  <span className="italic text-baselabel text-xs">Opcional</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="min-w-52 bg-baseinput border border-basebutton text-sm rounded-md p-3">
                  <input type="text" placeholder="Bairro" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
                </div>
                <div className="w-full bg-baseinput border border-basebutton text-sm rounded-md p-3">
                  <input type="text" placeholder="Cidade" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
                </div>
                <div className="w-16 bg-baseinput border border-basebutton text-sm rounded-md p-3">
                  <input type="text" placeholder="UF" className="w-full border-none bg-transparent outline-none placeholder:text-baselabel" />
                </div>
              </div>
            </form>
          </div>

          <div className="bg-basecard p-10 rounded-md">
            <div className="flex items-start gap-2">
              <CurrencyDollar className="size-6 text-purple" />
              <div className="flex flex-col">
                <span className="text-basesubtitle font-medium">Pagamento</span>
                <span className="text-basetext text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs">
              <button type="button" className="flex items-center w-full gap-2 bg-basebutton uppercase p-4 rounded-md">
                <CreditCard className="size-4 text-purple" />
                CARTÃO DE CRÉDITO
              </button>
              <button type="button" className="flex items-center w-full gap-2 bg-basebutton uppercase p-4 rounded-md">
                <Bank className="size-4 text-purple" />
                CARTÃO DE DÉBITO
              </button>
              <button type="button" className="flex items-center w-full gap-2 bg-basebutton uppercase p-4 rounded-md">
                <Money className="size-4 text-purple" />
                DINHEIRO
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 space-y-4">
        <h2 className="font-alt font-bold text-basesubtitle text-lg">Cafés selecionados</h2>
        <div className="bg-basecard p-10 rounded-md space-y-8 rounded-se-3xl rounded-es-3xl">
          <div className="space-y-12">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img src="/coffees/americano.svg" alt="" className="size-16" />
                <div className="flex flex-col gap-2">
                  <span className="text-basesubtitle">Expresso Americano</span>
                  <div className="flex items-center gap-2">
                    <QuantityInput />
                    <button type="button" className="flex items-center w-full gap-2 bg-basebutton uppercase p-2 rounded-md">
                      <Trash className="size-4 text-purple" />
                      <span className="text-xs">REMOVER</span>
                    </button>
                  </div>
                </div>
              </div>
              <span className="font-bold">R$ 9,90</span>
            </div>
            
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img src="/coffees/americano.svg" alt="" className="size-16" />
                <div className="flex flex-col gap-2">
                  <span className="text-basesubtitle">Expresso Americano</span>
                  <div className="flex items-center gap-2">
                    <QuantityInput />
                    <button type="button" className="flex items-center w-full gap-2 bg-basebutton uppercase p-2 rounded-md">
                      <Trash className="size-4 text-purple" />
                      <span className="text-xs">REMOVER</span>
                    </button>
                  </div>
                </div>
              </div>
              <span className="font-bold">R$ 9,90</span>
            </div>
          </div>

          <div className="w-full h-[1.5px] shrink-0 bg-basebutton" />

          <div className="space-y-3 ">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="flex items-center justify-between text-basesubtitle">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">R$ 33,20</span>
            </div>
          </div>

          <button type="button" className="w-full rounded-md text-white bg-yellow p-3 leading-relaxed text-sm font-bold text-center">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  )
}