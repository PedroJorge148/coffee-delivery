import { ContentContainer, HomeContainer, Item, Itens, Title } from './styles'
import image from '../../../../assets/Cafe.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>

        <Itens>
          <Item variant="yellow-dark">
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            Compra simples e segura
          </Item>
          <Item variant="base-text">
            <div>
              <Package size={16} weight="fill" />
            </div>
            Embalagem mantém o café intacto
          </Item>
          <Item variant="yellow">
            <div>
              <Timer size={16} weight="fill" />
            </div>
            Entrega rápida e rastreada
          </Item>
          <Item variant="purple">
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            O café chega fresquinho até você
          </Item>
        </Itens>
      </ContentContainer>

      <img src={image} alt="" />
    </HomeContainer>
  )
}
