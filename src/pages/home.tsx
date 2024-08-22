import { Card } from "../components/card"
import { Hero } from "../components/hero"

import { coffees } from '../data/data.json'

export function Home() {
  return (
    <section className="flex flex-col">
      <Hero />

      <main className="mx-auto w-full flex flex-col gap-14 py-8 px-5 max-w-[1160px]">
        <h2 className="font-alt text-basesubtitle text-3xl font-extrabold leading-tight">Nossos cafés</h2>
        <div className="flex items-center flex-wrap gap-8">
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </main>
    </section>
  )
}

