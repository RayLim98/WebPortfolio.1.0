import BgCarousel from '../../components/composite/carousel/BgCarousel'
import PageStack from '../../components/core/PageWrapper'
import NavHeader from '../../components/template/nav/NavHeader'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import TitlePage from './TitlePage'

import useScreenSize from '../../hooks/useScreenSize'
import MobileHeader from '../../components/template/nav/MobileHeader'

/**
 * @description Home page 
 */
const Main = () => {
  const isMobile = useScreenSize('sm', 'down')
  console.log(isMobile)
  return (
    <>
      <BgCarousel/>
      <PageStack>
        {
          isMobile && <MobileHeader/>  
        }
        <TitlePage/>
        {
          !isMobile && <NavHeader/>
        }
        <About/>
        <Projects/>
        <Contact/>
      </PageStack>
    </>
  )
}

export default Main
