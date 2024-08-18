import { Hero } from "./components/hero"
import { Header } from "./components/header"

export function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="flex flex-col">
        <Hero />

        <main className="mx-auto w-full flex flex-col gap-14 py-8 px-5 max-w-[1160px]">
          <h2 className="font-alt text-basetitle text-4xl font-extrabold leading-tight">Nossos cafés</h2>
          <div className="flex items-center flex-wrap gap-8">
            <div className="w-64 flex flex-col items-center justify-center bg-basecard rounded-md rounded-se-3xl rounded-es-3xl px-5 pb-5">
              <img src="/coffees/americano.svg" alt="" className="-mt-5" />
              <div className="mt-4 bg-yellowligth rounded-full text-yellowdark px-2 py-1 uppercase font-bold text-[0.625rem] text-center">
                Tradicional
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

