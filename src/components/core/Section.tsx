import styled from "styled-components";

interface Props {
  bgColor?: string
  flex?: boolean
  height?: number
  gap?: string | number
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
}

/**
 * @description Wrapper for inner page, representing a particular section in the page
 */
const Article = styled.article<Props>`
  display: flex;
  gap: ${({gap})=> gap && `${gap}px`};
  flex-direction: ${({direction})=> direction && direction};
  background-color: ${({bgColor})=> bgColor && bgColor};
  justify-content: center;
  align-items: center;
  height: ${({height})=> height ? `${height}vh`: `100vh`};
`

export default Article
