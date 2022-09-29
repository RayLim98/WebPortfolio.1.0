import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { background } from '../../../contants/zindex'
import Stack from '../../core/Stack'

const pages = [
  {
    name: 'Title',
  },
  {
    name: 'About',
  },
  {
    name: 'Projects',
  },
  {
    name: 'Contact',
  },
]

const CarouselWrapper = styled(Stack)`
  position: fixed;
  z-index: ${background};
  flex-direction: row;
  height: 100vh;
`

const CarouselItem = styled.div`
  width: 100vw;
  translate: ${({position}:{position: number})=> position && `${-position}%`};
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
        items.map(item => 
          <CarouselItem position={y}>
            <h1>
              {item.name}
            </h1>
          </CarouselItem>
          )
      }
    </CarouselWrapper>
  )
}

export default BgCarousel