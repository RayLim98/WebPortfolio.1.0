import { useState, useEffect } from 'react';
import screenSizes from '../contants/screenSizes';
import debounce from '../utils/debounce';

type thresholdType = 'up' | 'down'
type sizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * @description Hooks for the screen size. 
 * Returns TRUE if the current size is within the specified threshold 
 */
const useScreenSize = (size: sizeType, threshold: thresholdType) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const option = screenSizes[size]

  const handleResize = ()=> setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResize, 100), false) 
    return ()=> {
      window.removeEventListener('resize', debounce(handleResize, 100), false)
    }
  }, [])
  
  switch (threshold) {
    case 'up':
      return width > option
    case 'down':
      return width < option 
    default:
      throw new Error('Wrong type literal')
  }
}

export default useScreenSize;
