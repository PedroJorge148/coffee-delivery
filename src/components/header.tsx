import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="mx-auto w-full flex items-center justify-between px-4 py-8 max-w-[1160px]">
      {/* TODO: change to react-router-dom link */}
      <NavLink to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </NavLink>
      <div className="flex items-center gap-3">
        <span className="flex items-center bg-purpleligth p-2 rounded-md">
          <MapPin className="size-6 mr-1.5 text-purple" weight="fill" />
          <span className="text-purpledark">Massapê, CE</span>
        </span>
        <NavLink to="/cart" className="bg-yellowligth text-yellowdark p-2 rounded-md">
          <ShoppingCart className="size-6" weight="fill" />
        </NavLink>
      </div>
    </header>
  )
}