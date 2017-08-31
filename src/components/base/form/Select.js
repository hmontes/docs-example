import React from 'react'
import styled from 'styled-components'
import Label from './Label'

import { Svg } from '../'

const StyleSelect = styled.select`
  width: 100%;
	height: 40px;
	padding: 0 40px 0 15px;
	border: 1px solid #${props => !props.invalid ? 'ebebeb' : 'ea2e68'};
	border-radius: 4px;
	color: #b2b2b2;
	font-family: "Titillium Web",sans-serif;
	line-height: 40px;
	appearance: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
	}
`

const Select = (props) => (
  <Label select className="label select">
    <StyleSelect {...props} />
		<Svg.Arrow />
  </Label>
)

export default Select