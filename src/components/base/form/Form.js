import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import Label from './Label'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Group from './Group'
import Item from './Item'

/** Conjunto de componentes para escribir formularios de mejor manera */
const Form = ({...props, children}) => (
  <form {...props}>{children}</form>
)

Input.propTypes = {
  /** En caso de ser positivo, rodea con un borde rojo el resultado incorrecto */
  invalid: PropTypes.bool,
  /** Hace Inputs redondeados */
  rounded: PropTypes.bool
}

Form.Input = Input
Form.Textarea = Textarea
Form.Select = Select
Form.Label = Label
Form.Radio = Radio
Form.Checkbox = Checkbox
Form.Group = Group
Form.Item = Item

export default Form





