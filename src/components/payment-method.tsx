import { CurrencyDollar, CreditCard, Bank, Money } from "phosphor-react";
import * as RadioGroup from '@radix-ui/react-radio-group';
import { DeliveryFormSchema } from "../pages/cart";
import { Controller, useFormContext } from "react-hook-form";


export function PaymentMethod() {
  const { control } = useFormContext<DeliveryFormSchema>()

  return (
    <div className="bg-basecard p-10 rounded-md">
      <div className="flex items-start gap-2">
        <CurrencyDollar className="size-6 text-purple" />
        <div className="flex flex-col">
          <span className="text-basesubtitle font-medium">Pagamento</span>
          <span className="text-basetext text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </div>

      <Controller
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <RadioGroup.Root 
            className="mt-8 flex items-center gap-3 text-xs"
            value={field.value}
            onValueChange={field.onChange}
          >
            <RadioGroup.Item
              value="credit"
              className="flex items-center w-full gap-2 bg-basebutton border border-transparent uppercase p-4 rounded-md transition-colors data-[state=checked]:border-purple data-[state=checked]:bg-purpleligth hover:bg-basehover"
            >
              <CreditCard className="size-4 text-purple" />
              CARTÃO DE CRÉDITO
            </RadioGroup.Item>
            <RadioGroup.Item
              value="debit"
              className="flex items-center w-full gap-2 bg-basebutton border border-transparent uppercase p-4 rounded-md transition-colors data-[state=checked]:border-purple data-[state=checked]:bg-purpleligth hover:bg-basehover"
            >
              <Bank className="size-4 text-purple" />
              CARTÃO DE DÉBITO
            </RadioGroup.Item>
            <RadioGroup.Item
              value="cash"
              className="flex items-center w-full gap-2 bg-basebutton border border-transparent uppercase p-4 rounded-md transition-colors data-[state=checked]:border-purple data-[state=checked]:bg-purpleligth hover:bg-basehover"
            >
              <Money className="size-4 text-purple" />
              DINHEIRO
            </RadioGroup.Item>
          </RadioGroup.Root>
        )}
      />
    </div>
  )
}