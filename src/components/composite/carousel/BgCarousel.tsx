import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { background } from '../../../contants/zindex'
import Stack from '../../core/Stack'

type linearGradiant = {
  to: string
  from: string
}

interface Item {
  position: number
  gColor: linearGradiant
}

const pages = [
  {
    name: 'Title',
    from: '#51A1FF',
    to: '#887DFF',
  },
  {
    name: 'About',
    from: '#887DFF',
    to: '#B2F1FF',
  },
  {
    name: 'Projects',
    from: '#B2F1FF',
    to: '#0F4482',
  },
  {
    name: 'Contact',
    from: '#0F4482',
    to: '#183338',
  },
]

const CarouselWrapper = styled(Stack)`
  position: fixed;
  z-index: ${background};
  flex-direction: row;
  height: 100vh;
`

const CarouselItem = styled.div<Item>`
  width: 100vw;
  ${({gColor})=> gColor && `
    background: linear-gradient(to right, ${gColor.from}, ${gColor.to});
  `}
  translate: ${({position})=> position && `${-position}%`};
`

const BgCarousel = () => {
  /**
   * @description Paginating background for aesthetic purposes
   */
  const items = pages;
  const [y, setY] = useState(0);
  const handleScroll = () => setY(interpolateScroll());
  const handleResize = () => setY(interpolateScroll());
  
  useEffect(()=> {
    window.addEventListener('resize', handleResize, false);
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
      window.removeEventListener('resize', handleResize, false);
    }
  },[])

  const interpolateScroll = () =>  (window.scrollY/window.innerHeight) * 100;

  return (
    <CarouselWrapper>
      {
        items.map(item => {
            const linearGrad = {
              to: item.to,
              from: item.from
            }
            return (
              <CarouselItem 
                position={y}
                gColor={linearGrad}
              />
            )
          }
        )
      }
    </CarouselWrapper>
  )
}

export default BgCarousel