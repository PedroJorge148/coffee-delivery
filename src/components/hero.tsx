import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Hero() {
  return (
    <div className="relative">
      <div className="relative mx-auto flex items-start justify-between gap-14 py-24 px-5 z-10 max-w-[1160px]">
        <div className="space-y-16">
          <div className="flex flex-col gap-4">
            <h1 className="font-alt text-basetitle text-5xl font-extrabold leading-tight">Encontre o café perfeito para qualquer hora do dia</h1>
            <span className="text-basesubtitle text-xl">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </div>

          <div className="grid grid-cols-2 gap-y-6 whitespace-nowrap">
            <div className="flex items-center gap-4">
              <div className="bg-yellowdark p-2 rounded-full flex justify-center items-center">
                <ShoppingCart className="size-4 text-white" weight="fill" />
              </div>
              <span className="text-basetext">Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-basetext p-2 rounded-full flex justify-center items-center">
                <Package className="size-4 text-white" weight="fill" />
              </div>
              <span className="text-basetext">Embalagem mantém o café intacto</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-yellow p-2 rounded-full flex justify-center items-center">
                <Timer className="size-4 text-white" weight="fill" />
              </div>
              <span className="text-basetext">Entrega rápida e rastreada</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-purple p-2 rounded-full flex justify-center items-center">
                <Coffee className="size-4 text-white" weight="fill" />
              </div>
              <span className="text-basetext">O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <img src="/hero.svg" alt="Imagem de um café" />
      </div>

      <img
        src="/hero-bg.svg"
        alt=""
        className="absolute top-0 left-0 w-full max-h-[544px] object-cover"
      />
    </div>
  )
}