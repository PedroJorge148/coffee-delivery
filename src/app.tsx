import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
      <Toaster />
    </div>
  )
}