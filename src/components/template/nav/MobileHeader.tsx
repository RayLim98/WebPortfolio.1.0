import React, { useState } from 'react'
import Stack from '../../core/Stack'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { headerHeight } from './NavHeader'

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

const StyledMobileHeader = styled.nav`
  position: fixed;
  height: ${headerHeight}vh;
`

const StyledLink = styled(Link)`
  transition: all ease 300ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.8);
  }
`
interface DrawerProps {
  active?: boolean
}

const Drawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: 100vh;
  width: 100vw;
  padding-top: 10%;
  transform: translate(-100%);
  transition: transform 400ms ease;
  background-color: white;
  ${({active})=> active && `
    transform: translate(0%);
  `}
`

const MobileHeader = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledMobileHeader>
      <button onClick={()=> setOpen(true)}> Menu </button>
      <Drawer 
        onClick={()=> setOpen(false)}
        active = {open}
      >
      {
        navOptions.map((item)=> 
          <StyledLink
            to={item.id}
            smooth={true} 
            spy={true} 
            duration={400}
            onClick={()=> setOpen(false)}
          >
            <h2>
            {item.name}
            </h2>
          </StyledLink>
        )
      }
      </Drawer>
    </StyledMobileHeader>
  )
}

export default MobileHeader
