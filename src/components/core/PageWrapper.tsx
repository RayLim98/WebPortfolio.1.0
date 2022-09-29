import styled from 'styled-components'
import Stack from './Stack'

const PageContent = styled(Stack)`
  flex-grow: 1;
  min-height: 100vh;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`
/**
 * @description Page Container to hold all content. Handles sizing and centering
 */
const PageStack = ({
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

export default PageStack
