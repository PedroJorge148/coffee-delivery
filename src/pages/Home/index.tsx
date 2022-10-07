import { HomeCointaner, Itens, Title } from './styles'
import image from '../../assets/Cafe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeCointaner>
      <div>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>

        <Itens>
          <div>
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </div>
          <div>
            <Package size={16} weight="fill" />
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <Coffee size={16} weight="fill" />
            <span>O café chega fresquinho até você</span>
          </div>
        </Itens>
      </div>

      <img src={image} alt="" />
    </HomeCointaner>
  )
}
