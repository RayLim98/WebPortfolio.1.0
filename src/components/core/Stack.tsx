import styled from "styled-components";

interface StackProps {
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
  flex?: string
  flexGrow?: number 
  flexShrink?: number
  flexBasis?: number
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  justifyItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  alignSelf?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  height?: string
  width?: string
  backgroundColor?: string
}

/**
 * @description Flex container
 */
const Stack = styled.div<StackProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({direction})=> direction ? direction: 'column'};
  flex-grow: ${({flexGrow})=> flexGrow ? flexGrow: 1};
  flex-shrink: ${({flexShrink})=> flexShrink && flexShrink};
  flex-basis: ${({flexBasis})=> flexBasis && flexBasis};
  justify-content: ${({justifyContent})=> justifyContent && justifyContent};
  justify-items: ${({justifyItems})=> justifyItems && justifyItems};
  align-items: ${({alignItems})=> alignItems && alignItems};
  align-self: ${({alignSelf})=> alignSelf && alignSelf};
  height: ${({height})=> height && height};
  width: ${({width})=> width && width};
  background-color: ${({backgroundColor})=> backgroundColor && backgroundColor};
`

export default Stack
