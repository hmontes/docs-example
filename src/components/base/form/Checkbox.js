import React from 'react'

import Input from './Input'
import Label from './Label'

const Radio = (props) => (
  <Label>
    <Input checkbox value={props.value} name={props.name} checked={props.checked} />
    <span className="checkbox"><span></span></span>
    {props.children}
  </Label>
)

export default Radio