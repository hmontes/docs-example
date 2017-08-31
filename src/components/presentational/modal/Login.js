import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Modal, Form, Button } from '../../base'

// import { FACEBOOK_CLIENT_ID } from '~/config/services'

const LinkPassword = styled.a`
  cursor: pointer;
  color: #fb5216;
  font-weight: 700;
`

/* 

    RECORDAR TERMINAR
    <p>¿Olvidaste tu contraseña? <LinkPassword onClick={!props.isFbLoading && !props.isGLoading && !props.isEmailLoading ? props.handlePassword : false} >Click Aquí!</LinkPassword></p>

*/

/** Este es el modal de login. Se gestiona para crear una iniciar sesión. Puedes hacerlo vía Facebook, Google
 * o por email
 */
const Login = (props) => {
  return(
    <div>
      <Modal {...props} closeBtn={!props.isFbLoading && !props.isGLoading && !props.isEmailLoading ? props.closeBtn : null}>
        
        <Form.Group>
          <Form.Item>
            <Button onClick={props.loginFacebook} mid wide facebook disabled={props.isGLoading || props.isEmailLoading} isLoading={props.isFbLoading} className="half">Ingresar con Facebook</Button>
          </Form.Item>
            
          <Form.Item>
            <Button onClick={props.loginGoogle} disabled={props.isFbLoading || props.isEmailLoading} isLoading={props.isGLoading} mid wide google className="half">Ingresar con Google</Button>
          </Form.Item>
        </Form.Group>

        <Form onSubmit={props.submitForm}>
          <Form.Label input required style={{marginTop: '22px'}}>Dirección de Email</Form.Label>
          <Form.Input invalid={props.invalidEmail} email placeholder="Ingresa tu dirección de correo aquí..." name="email" value={props.email} onChange={props.handleChange} />

          <Form.Label input required>Contraseña</Form.Label>
          <Form.Input invalid={props.invalidPassword} password placeholder="Ingresa tu contraseña aquí..." name="password" value={props.password} onChange={props.handleChange} />

          

          <Button isLoading={props.isEmailLoading} disabled={props.isFbLoading || props.isGLoading} mid wide style={{marginTop: '22px'}}>Siguiente</Button>

        </Form>
      </Modal>
    </div>
  )
}

Login.propTypes = {
  /** Al hacer click en Siguiente se gestiona el formulario */
  submitForm: PropTypes.func,
  /** Se encarga de manejar el contenido de cada campo del formulario */
  handleChange: PropTypes.func,
  /** Este es el correo del usuario */
  email: PropTypes.string,
  /** Se activa en caso de que el email sea invalido */
  invalidEmail: PropTypes.bool,
  /** Este es el password del usuario */
  password: PropTypes.string,
  /** Se activa en caso de que el password sea invalido */
  invalidPassword: PropTypes.bool,
  /** Se usa para abrir el modal de recuperación de password */
  handlePassword: PropTypes.func,
  /** Función que se inicia al hacer click en el boton de Facebook */
  loginFacebook: PropTypes.func,
  /** Función que se inicia al hacer click en el boton de Google */
  loginGoogle: PropTypes.func,
  /** Indica cuando el inicio de sesión en Facebook está cargando */
  isFbLoading: PropTypes.bool,
  /** Indica cuando el inicio de sesión en Google está cargando */
  isGLoading: PropTypes.bool,
  /** Indica si el Modal está cargando */
  isEmailLoading: PropTypes.bool,
}

export default Login