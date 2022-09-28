import React from 'react'
import PageStack from '../../components/core/wrappers/PageWrapper'
import Section from '../../components/core/wrappers/Section'
import useScreenSize from '../../hooks/useScreenSize'

const Main = () => {
  const isMobile = useScreenSize('sm', 'up')
  console.log(isMobile)
  return (
    <PageStack>
      <Section>
        <h1>
        MainPage
        </h1>
      </Section>
      <Section>
        MainPage
      </Section>
      <Section>
        MainPage
      </Section>
    </PageStack>
  )
}

export default Main