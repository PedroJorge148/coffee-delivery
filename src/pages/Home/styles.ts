import styled from 'styled-components'

export const CoffeContainer = styled.main`
  padding: 1.5rem 10rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeeList = styled.div`
  display: flex;
  margin-top: 3rem;
`
export const Coffee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin-top: -5.7rem;
    height: 120px;
    width: 120px;
  }

  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    color: ${(props) => props.theme['base-label']};
  }
`
export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    padding: 0.5rem;
    border-radius: 30%;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;
  }
`
