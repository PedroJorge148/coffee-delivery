import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <div className="mx-auto flex flex-col gap-8 px-4 py-20 w-full max-w-[1160px]">
      <div className="space-y-1">
        <h1 className="font-alt font-extrabold text-4xl text-yellowdark">Uhu! Pedido confirmado</h1>
        <span className="text-basesubtitle text-xl">Agora é só aguardar que logo o café chegará até você</span>
      </div>

      <div className="flex items-end justify-between w-full">
        <div className="relative p-[1px] w-full max-w-[520px] rounded-md rounded-se-3xl rounded-es-3xl bg-gradient-to-r from-yellow to-purple">
          <div className="p-10 w-full h-full bg-background rounded-md rounded-se-3xl rounded-es-3xl space-y-8">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center p-2 bg-purple text-white rounded-full">
                <MapPin className="size-4" weight="fill" />
              </div>
              <div className="flex flex-col">
                <span>Entrega em <b>Rua João Daniel Martinelli, 102</b></span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center p-2 bg-yellow text-white rounded-full">
                <Timer className="size-4" weight="fill" />
              </div>
              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <b>20 min - 30 min</b>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center p-2 bg-yellowdark text-white rounded-full">
                <CurrencyDollar className="size-4" weight="fill" />
              </div>
              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <b>Cartão de Crédito</b>
              </div>
            </div>
          </div>
        </div>
        <img src="/delivery.svg" alt="" />
      </div>

    </div>
  )
}