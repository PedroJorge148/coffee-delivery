import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { NavLink, redirect, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/cart-context";

export function Success() {
  const { orderId } = useParams()
  const { orders } = useCart()
  const navigate = useNavigate()

  const order = orders.find((item) => item.id === Number(orderId))

  if (!order?.id) {
    return (
      <div className="mx-auto max-w-[760px] flex flex-col bg-yellowligth border border-yellow p-8 rounded-md text-center">
        <span className="text-xl mb-2">Oops... Página não encontrada.</span>
        <span>
          Clique para{' '}
          <NavLink to="/" className="underline ">
            voltar ao início!
          </NavLink>
        </span>
      </div>
    )
  }

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
                <span>Entrega em <b>{`${order.street}, ${order.number}`}</b></span>
                <span>{`${order.neighborhood} - ${order.city}, ${order.state}`}</span>
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
                <b>
                  {order.paymentMethod === 'cash' && 'Dinheiro'}
                  {order.paymentMethod === 'debit' && 'Cartão de débito'}
                  {order.paymentMethod === 'credit' && 'Cartão de crédito'}
                </b>
              </div>
            </div>
          </div>
        </div>
        <img src="/delivery.svg" alt="" />
      </div>

    </div>
  )
}