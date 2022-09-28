import styled from 'styled-components'
import Stack from './Stack'

interface PageProps {
  marginRight?: number
  marginLeft?: number
}

const PageStack = styled(Stack)`
  position: relative;
  min-height: 100vh;
  align-items: center;
`

const PageContent = styled(PageStack)<PageProps>`
  max-width: 900px;
  padding: 1rem;
  margin-right: auto;
  margin-left: auto; 
`
const Page = ({
  children
}:{
  children: React.ReactNode
}) => {
  return (
    <PageContent>
      {children}
    </PageContent>
  )

}

export default Page
