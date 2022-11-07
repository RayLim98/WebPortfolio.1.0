import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledLink = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-width: 10em;
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 4rem;
  transition: all ease 300ms;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 20px 1px rgba(0,0,0,0.52); 
  box-shadow: 5px 5px 20px 1px rgba(0,0,0,0.52);
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.8);
  }
`

const StyledNav = styled.nav`
  position: sticky;
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  top: 0;
  right: 0;
  left: 0;
  min-height: ${({height}: {height: number})=> height ? `${height}vh`: `10vh`};
`

export const headerHeight = 10;

const navOptions = [
  {
    name: 'About',
    id: 'about'
  },
  {
    name: 'Project',
    id: 'projects'
  },
  {
    name: 'Contact',
    id: 'contact'
  },
]

const NavHeader = () => {
  return (
    <StyledNav height={headerHeight}>
      {
        navOptions.map((item)=> 
          <StyledLink
            to={item.id}
            smooth={true} 
            spy={true} 
            duration={400}
          >
            <h2>
            {item.name}
            </h2>
          </StyledLink>
        )
      }
    </StyledNav>
  )
}

export default NavHeader
