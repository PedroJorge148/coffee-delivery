import { MapPin } from "phosphor-react"
import logo from './assets/logo.svg'

export function App() {
  return (
    <div className="flex flex-col">
      <header className="flex items-center justify-between px-40 py-8">
        <img src={logo} alt="Coffee Delivery" />
        <div className="flex items-center gap-3">
          <span className="">
            <MapPin className="size-4" />
          </span>
          <a href="#"></a>
        </div>
      </header>
    </div>
  )
}

