import React from 'react'
import styled, { keyframes } from 'styled-components'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import { bool, number } from 'prop-types'

const Spin = keyframes`
  100% {
    transform:rotate(360deg);
  }
`
// text-align: ${props => props.inline ? 'center' : 'left' };
const Wrap = styled.span`
  display: ${props => props.inline ? 'table' : 'inline' };
  ${props => props.inline ? 'margin: auto' : null};
  > svg {
    animation: ${Spin} 4s linear infinite;
    color: ${props => props.white ? '#FFF' : 'initial'};
    font-size: ${props => props.size}em;
    text-align: center;
  }
`
/** Componente para realizar la carga de algún elemento */
const Loader = (props) => (
  <Wrap {...props}>
    <FaCircleONotch />
  </Wrap>
)

Loader.defaultProps = {
  white: false,
  size: 2
}

/** Si es positivo, El loader será de color Blanco */
Loader.propTypes = {
  /** Hace que el spinner sea de color blanco */
  white: bool,
  /** Define el tamaño del loader */
  size: number,
  /** Si es positivo se muestra el Loader al medio en linea */
  inline: bool
}

export default Loader