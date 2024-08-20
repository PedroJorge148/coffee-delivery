import { Card } from "../components/card"
import { Hero } from "../components/hero"

export function Home() {
  return (
    <section className="flex flex-col">
      <Hero />

      <main className="mx-auto w-full flex flex-col gap-14 py-8 px-5 max-w-[1160px]">
        <h2 className="font-alt text-basesubtitle text-3xl font-extrabold leading-tight">Nossos cafés</h2>
        <div className="flex items-center flex-wrap gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </main>
    </section>
  )
}

