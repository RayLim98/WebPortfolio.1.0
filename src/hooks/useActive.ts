import { useEffect, useState } from 'react'
import debounce from '../utils/debounce'

const useActiveScroll = () => {
  const [isActive, setIsActive] = useState(false)

  const handleScroll = () => {
    setIsActive(true)
    debounce(setIsActive(false), 3000)
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [])

  return isActive
}

export default useActiveScroll
