import React from 'react'

import Input from './Input'
import Label from './Label'

const Radio = (props) => (
  <Label>
    <Input radio value={props.value} name={props.name} checked={props.checked} onChange={props.onChange}/>
    <span className="radio"><span></span></span>
    {props.children}
  </Label>
)

export default Radio