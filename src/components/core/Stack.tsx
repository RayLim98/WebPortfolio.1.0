import styled from "styled-components";

interface StackProps {
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
  flex?: string
  gap?: string | number
  flexGrow?: number 
  flexShrink?: number
  flexBasis?: string
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  justifyItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  height?: string
  width?: string
  maxWidth?: string
  maxHeight?: string
  backgroundColor?: string
}

/**
 * @description Flex container
 */
const Stack = styled.div<StackProps>`
  display: flex;
  gap: ${({gap})=> gap && `${gap}px`};
  flex-direction: ${({direction})=> direction ? direction: 'column'};
  flex-grow: ${({flexGrow})=> flexGrow && flexGrow};
  flex-shrink: ${({flexShrink})=> flexShrink && flexShrink};
  flex-basis: ${({flexBasis})=> flexBasis && flexBasis};
  flex-wrap: ${({flexWrap})=> flexWrap ? flexWrap : 'nowrap'};
  justify-content: ${({justifyContent})=> justifyContent && justifyContent};
  justify-items: ${({justifyItems})=> justifyItems && justifyItems};
  align-items: ${({alignItems})=> alignItems && alignItems};
  align-self: ${({alignSelf})=> alignSelf && alignSelf};
  height: ${({height})=> height && height};
  width: ${({width})=> width && width};
  max-height: ${({maxHeight})=> maxHeight && maxHeight};
  max-width: ${({maxWidth})=> maxWidth && maxWidth};
  background-color: ${({backgroundColor})=> backgroundColor && backgroundColor};
`

export default Stack
