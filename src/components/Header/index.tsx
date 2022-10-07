import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="Logo" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
