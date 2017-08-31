import React from 'react'
import Arrow from './Arrow'
import Plus from './Plus'

const Svg = (props) => (
  <span>
    {props.children}
  </span>
)

Svg.Arrow = Arrow
Svg.Plus = Plus

export default Svg