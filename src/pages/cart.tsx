import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { AddressForm } from "../components/address-form";
import { CartItem } from "../components/cart-item";
import { PaymentMethod } from "../components/payment-method";
import { useCart } from "../context/cart-context";
import { formartCurrency } from "../lib/utils";

import { coffees } from '../data/data.json';

const deliveryFormSchema = z.object({
  cep: z.coerce.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.coerce.number().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderProps = z.infer<typeof deliveryFormSchema>

const deliveryPrice = 3.5

export function Cart() {
  const { cartItems, checkout } = useCart()

  const form = useForm<OrderProps>({
    resolver: zodResolver(deliveryFormSchema)
  })

  const { handleSubmit, formState: { isSubmitting } } = form

  const coffesInCart = cartItems.map((item) => {
    const coffeeDetails = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeDetails) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeDetails,
      quantity: item.quantity
    }
  })

  const totalPrice = coffesInCart.reduce(
    (total, coffee) => total + (coffee.price * coffee.quantity),
    0
  )

  function handleCreateNewOrder(data: OrderProps) {
    if (coffesInCart.length === 0) {
      return toast('Seu carrinho está vazio!', {
        icon: '⚠️'
      })
    }

    checkout(data)
  }

  function onInvalid() {
    toast('Os campos são obrigatórios!', {
      icon: '⚠️'
    })
  }

  return (
    <div className="mx-auto grid grid-cols-5 gap-8 px-4 py-10 w-full max-w-[1160px]">
      <div className="col-span-3 space-y-4">
        <h2 className="font-alt font-bold text-basesubtitle text-lg">Complete seu pedido</h2>
        <div className="space-y-3">
          <form id="order" onSubmit={handleSubmit(handleCreateNewOrder, onInvalid)}>
            <FormProvider {...form}>
              <AddressForm />

              <PaymentMethod />
            </FormProvider>
          </form>
        </div>
      </div>

      <div className="col-span-2 space-y-4">
        <h2 className="font-alt font-bold text-basesubtitle text-lg">Cafés selecionados</h2>
        <div className="bg-basecard p-10 rounded-md space-y-8 rounded-se-3xl rounded-es-3xl">
          <div className="space-y-12">
            {coffesInCart.length > 0 ?
              coffesInCart.map((coffee) => (
                <CartItem key={coffee.id} coffee={coffee} />
              )) : (
                <div className="flex flex-col bg-yellowligth border border-yellowdark px-4 py-2 rounded-md text-center">
                  <span>Oops... </span>
                  <span>Não há nenhum café em seu carrinho.</span>
                  <span>
                    Clique para{' '}
                    <NavLink to="/" className="underline ">
                      voltar ao início!
                    </NavLink>
                  </span>
                </div>
              )}
          </div>

          <div className="w-full h-[1.5px] shrink-0 bg-basebutton" />

          <div className="space-y-3 ">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total de itens</span>
              <span>{formartCurrency(totalPrice)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Entrega</span>
              <span>{formartCurrency(deliveryPrice)}</span>
            </div>
            <div className="flex items-center justify-between text-basesubtitle">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">
                {formartCurrency(totalPrice + deliveryPrice)}
              </span>
            </div>
          </div>

          <button
            type="submit"
            form="order"
            className="w-full rounded-md text-white bg-yellow p-3 leading-relaxed text-sm font-bold transition-colors enabled:hover:bg-yellowdark disabled:opacity-90 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  )
}