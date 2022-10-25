import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { background } from '../../../contants/zindex'
import Stack from '../../core/Stack'

const pages = [
  {
    name: 'Title',
    from: '#51A1FF',
    to: '#887DFF',
  },
  {
    name: 'About',
    from: '#51A1FF',
    to: '#887DFF',
  },
  {
    name: 'Projects',
    from: '#51A1FF',
    to: '#887DFF',
  },
  {
    name: 'Contact',
    from: '#51A1FF',
    to: '#887DFF',
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
  background: linear-gradient(to right, #51A1FF, #887DFF,#51A1FF);
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
          <CarouselItem position={y}/>
          )
      }
    </CarouselWrapper>
  )
}

export default BgCarousel