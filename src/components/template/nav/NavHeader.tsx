import styled from 'styled-components'
import { Link } from 'react-scroll'

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

export const header = 10;

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
    <StyledNav height={10}>
      {
        navOptions.map((item)=> 
          <Link to={item.id}
							smooth={true} 
							spy={true} 
							duration={500}
          >
            <h2>
            {item.name}
            </h2>
          </Link>
        )
      }
    </StyledNav>
  )
}

export default NavHeader
