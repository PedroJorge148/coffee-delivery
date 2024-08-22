import { MapPinLine } from "phosphor-react";
import { Input } from "./form/input";
import { useFormContext } from "react-hook-form";
import { DeliveryFormSchema } from "../pages/cart";

export function AddressForm() {
  const { register } = useFormContext<DeliveryFormSchema>()

  return (
    <div className="bg-basecard p-10 rounded-md space-y-8">
      <div className="flex items-start gap-2">
        <MapPinLine className="size-6 text-yellowdark" />
        <div className="flex flex-col">
          <span className="text-basesubtitle font-medium">Endereço de Entrega</span>
          <span className="text-basetext text-sm">Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          type="number"
          placeholder="CEP"
          className="w-52" 
          {...register('cep')}
        />
        <Input
          type="text"
          placeholder="Rua"
          {...register('street')}
        />
        <div className="flex gap-3">
          <Input
            type="number"
            placeholder="Número"
            className="max-w-52 w-full"
            {...register('number')}
          />
          <Input
            type="text"
            placeholder="Complemento"
            optional
            {...register('complement')}
          />
        </div>
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="Bairro"
            className="max-w-52 w-full"
            {...register('neighborhood')}
          />
          <Input
            type="text"
            placeholder="Cidade"
            {...register('city')}
          />
          <Input
            type="text"
            placeholder="UF"
            className="max-w-16 w-full"
            {...register('state')}
          />
        </div>
      </div>
    </div>
  )
}