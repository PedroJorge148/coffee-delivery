import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/cart-context";

export function App() {
  return (
    <div className="flex flex-col">
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
      <Toaster />
    </div>
  )
}