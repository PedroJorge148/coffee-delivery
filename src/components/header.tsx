import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/cart-context";

export function Header() {
  const { cartItems } = useCart()

  return (
    <header className="mx-auto w-full flex items-center justify-between px-4 py-8 max-w-[1160px]">
      <NavLink to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </NavLink>
      <div className="flex items-center gap-3">
        <span className="flex items-center bg-purpleligth p-2 rounded-md">
          <MapPin className="size-6 mr-1.5 text-purple" weight="fill" />
          <span className="text-purpledark">Massapê, CE</span>
        </span>
        <NavLink to="/cart" className="relative bg-yellowligth text-yellowdark p-2 rounded-md">
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-xs size-5 rounded-full text-white bg-yellowdark flex items-center justify-center">
            {cartItems.length}
          </span>
          <ShoppingCart className="size-6" weight="fill" />
        </NavLink>
      </div>
    </header>
  )
}