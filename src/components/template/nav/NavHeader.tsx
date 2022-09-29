import React from 'react'
import styled from 'styled-components'

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
    name: 'About'
  },
  {
    name: 'Project'
  },
  {
    name: 'Contact'
  },
]

const NavHeader = () => {
  return (
    <StyledNav height={10}>
      {
        navOptions.map((item)=> 
          <button>
            <h2>
              {item.name}
            </h2>
          </button>
        )
      }
    </StyledNav>
  )
}

export default NavHeader
