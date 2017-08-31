import React from 'react'
import styled from 'styled-components'

const Wrap = styled.svg`
  ${props => props.primary ? 'fill: #fb5216;' : null}
`

const SvgPlus = (props) => (
  <Wrap primary={props.primary} viewBox="0 0 13 13" preserveAspectRatio="xMinYMin meet" {...props}>
    <rect x="5" width="3" height="13"/>
    <rect y="5" width="13" height="3"/>
  </Wrap>
);

export default SvgPlus