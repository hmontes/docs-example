import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Modal, Form, Button, LineSeparator } from '../../base'

const Wrap = styled.div`
  & form hr {
    margin-top: 22px;
  }
`

/** Este es el modal de registro. Se gestiona para crear una cuenta de usuario. Puedes hacerlo vía Facebook, Google
 * o por email
 */
const SocialRegister = ({...props, closeBtn, isFbLoading, isGLoading, toEmailRegister, loginFacebook, loginGoogle}) => {
  return(
    <Modal {...props} closeBtn={!isFbLoading && !isGLoading ? closeBtn : null}>
      <Wrap>
        <Form>
          <Form.Group>
            <Form.Item>
              <Button onClick={loginFacebook} mid wide facebook disabled={isGLoading} isLoading={isFbLoading} className="half">Ingresar con Facebook</Button>
            </Form.Item>
            
            <Form.Item>  
              <Button onClick={loginGoogle} disabled={isFbLoading} isLoading={isGLoading} mid wide google className="half">Ingresar con Google</Button>
            </Form.Item>
          </Form.Group>
          
          <LineSeparator />

          <Button onClick={toEmailRegister} disabled={isFbLoading || isGLoading} mid wide>Registrarme usando un correo electrónico</Button>

        </Form>
      </Wrap>
    </Modal>
  )
}

SocialRegister.propTypes = {
  /** Indica cuando el inicio de sesión en Facebook está cargando */
  isFbLoading: PropTypes.bool,
  /** Indica cuando el inicio de sesión en Google está cargando */
  ifGLoading: PropTypes.bool,
  /** Función que se inicia al hacer click en el boton de registro por email */
  toEmailRegister: PropTypes.func,
  /** Función que se inicia al hacer click en el boton de Facebook */
  loginFacebook: PropTypes.func,
  /** Función que se inicia al hacer click en el boton de Google */
  loginGoogle: PropTypes.func
}

export default SocialRegister