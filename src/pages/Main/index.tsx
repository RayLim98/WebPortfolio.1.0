import BgCarousel from '../../components/composite/carousel/BgCarousel'
import PageStack from '../../components/core/PageWrapper'
import NavHeader from '../../components/template/nav/NavHeader'
import useScreenSize from '../../hooks/useScreenSize'
import About from './About'
import Projects from './Projects'
import TitlePage from './TitlePage'

const Main = () => {
  const isMobile = useScreenSize('sm', 'up')
  console.log(isMobile)
  return (
    <>
      <BgCarousel/>
      <PageStack>
        <TitlePage/>
        <NavHeader/>
        <About/>
        <Projects/>
      </PageStack>
    </>
  )
}

export default Main