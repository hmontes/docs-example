import React from 'react'
import styled from 'styled-components'
import CSSTransition from 'react-transition-group/CSSTransition'
import PropTypes from 'prop-types'

import opacity from './opacity'
import scale from './scale'

// import './Opacity.css'
// import './Scale.css'

const Wrap = styled.div`
  ${opacity}
  ${scale}
`

/** Este componente es para realizar animaciones de forma fácil
 * El timeout es fijo de 300ms
 */
const Animation = ({ children, ...props }) => (
  <Wrap id="hola">
    <CSSTransition
      {...props}
      timeout={300}
      classNames={props.type}
    >
      {children}
    </CSSTransition>
  </Wrap>
)

Animation.defaultProps = {
  mountOnEnter: true,
  unmountOnExit: true,
  type: 'opacity'
}

Animation.propTypes = {
  /** Montar el componente al entrar. Util para Overlays y modal */
  mountOnEnter: PropTypes.bool,
  /** Desmontar el componente al salir. Util para Overlays y modal */
  unmountOnExit: PropTypes.bool,
  /** Este es el tipo de animación que se realizará. Las opciones son "scale" y "opacity" */
  type: PropTypes.oneOf(['scale', 'opacity'])
}

export default Animation