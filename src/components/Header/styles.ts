import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  width: 100%;

  padding: 1rem 1rem;

  @media (min-width: 768px) {
    padding: 2rem 10rem;
  }

  img {
    height: 40px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  span {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};

    padding: 0.4rem;
    border-radius: 8px;
    gap: 0.2rem;
  }

  a:nth-child(2) {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    padding: 0.4rem;
    border-radius: 8px;
  }
`
