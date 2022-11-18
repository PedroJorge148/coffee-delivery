import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  padding: 3rem 10rem;

  img {
    width: 476px;
    height: 360px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Itens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-right: 1rem;
  gap: 0.5rem;
`
interface ItemProps {
  variant: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme[props.variant]};
    height: 32px;
    width: 32px;
    border-radius: 50%;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
