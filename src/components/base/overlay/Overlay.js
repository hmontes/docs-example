import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleOverlay = styled.div`
  background-color: #000;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	transition: all .3s ease-in-out;
  z-index: 9999;
  opacity: ${props => props.open ? 0.8 : 0};
  visibility: ${props => props.open ? 'visible' : 'hidden'};
`
/** Componente base para dar fondo a los sidebars y a los modals que aparezcan */
const Overlay = (props) => (
  <StyleOverlay open={props.open} />
)

Overlay.defaultProps = {
  open: false
}

Overlay.propTypes = {
  /** Gestiona la apertura o el cierre del Overlay */
  open: PropTypes.bool
}

export default Overlay