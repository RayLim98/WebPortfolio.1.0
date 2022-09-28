import React from 'react'
import BgCarousel from '../../components/composite/carousel/BgCarousel'
import PageStack from '../../components/core/wrappers/PageWrapper'
import Section from '../../components/core/wrappers/Section'
import useScreenSize from '../../hooks/useScreenSize'
import TitlePage from './TitlePage'

const Main = () => {
  const isMobile = useScreenSize('sm', 'up')
  console.log(isMobile)
  return (
    <div style={{overflowX: 'hidden'}}>
      <BgCarousel/>
      <PageStack>
        <TitlePage/>
        <Section>
          MainPage
        </Section>
        <Section>
          MainPage
        </Section>
      </PageStack>
    </div>
  )
}

export default Main