import React from "react";
import styled from "styled-components";

interface StackProps {
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
  flexGrow?: number 
  flexShrink?: number
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({direction})=> direction ? direction: 'column'};
  flex-grow: ${({flexGrow})=> flexGrow && flexGrow};
  flex-shrink: ${({flexShrink})=> flexShrink && flexShrink};
`

export default Stack
