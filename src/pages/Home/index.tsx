import { Intro } from './components/Intro'
import expresso from '../../assets/Expresso.svg'
import { ShoppingCart } from 'phosphor-react'
import { CoffeContainer, Coffee, CoffeeList, Tags } from './styles'

export function Home() {
  return (
    <>
      <Intro />

      <CoffeContainer>
        <h1>Nossos cafés</h1>
        <CoffeeList>
          <Coffee>
            <img src={expresso} alt="Expresso Tradicional" />
            <Tags>
              <p>Tradicional</p>
            </Tags>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <span>R$</span>
              <span>9,90</span>
              <form action="">
                <input type="number" />
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </form>
            </div>
          </Coffee>
        </CoffeeList>
      </CoffeContainer>
    </>
  )
}
