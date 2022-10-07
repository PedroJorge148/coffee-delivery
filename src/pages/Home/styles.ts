import styled from 'styled-components'

export const HomeCointaner = styled.main`
  /* display: flex; */
  /* margin: 5rem 10rem;
  flex-direction: column; */

  display: grid;
  grid-template-columns: 1fr 360px;
  padding: 3rem 10rem;
  /* border: 1px solid blue; */

  * {
    /* border: 1px solid black; */
  }

  img {
    height: 240px;
    width: 476px;
  }
`

export const Title = styled.div`
  margin-top: 0.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Itens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 66px;

  div {
    display: flex;
    gap: 0.2rem;
  }

  div svg {
    border-radius: 50px;
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
  }
`
