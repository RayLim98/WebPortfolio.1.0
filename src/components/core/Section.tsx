import styled from "styled-components";

interface Props {
  bgColor?: string
  flex?: boolean
  height?: number
}

/**
 * @description Wrapper for inner page, representing a particular section in the page
 */
const Section = styled.article<Props>`
  display: ${({flex})=> flex && 'flex'};
  align-self: stretch;
  background-color: ${({bgColor})=> bgColor && bgColor};
  height: ${({height})=> height ? `${height}vh`: `100vh`};
`

export default Section
