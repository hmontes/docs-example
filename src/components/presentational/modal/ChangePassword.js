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
const ChangePassword = ({...props, closeBtn, isLoading}) => {
  return(
    <Modal {...props} closeBtn={!isLoading ? closeBtn : null}>
      <Wrap>
      <p>
        Estimado {props.firstName}. Por favor, ingresa tu nueva contraseña. Una vez ingresada, por favor, inicia sesión nuevamente.
      </p>
        <Form onSubmit={props.submitForm}>
          
        <Form.Label style={{marginTop: '22px'}} input required>Contraseña</Form.Label>
        <Form.Input invalid={props.invalidPassword} password placeholder="Ingresa tu contraseña aquí..." name="password" value={props.password} onChange={props.handleChange} />
          
          <LineSeparator />

          <Button isLoading={props.isLoading} mid wide style={{marginTop: '22px'}}>Siguiente</Button>

        </Form>
      </Wrap>
    </Modal>
  )
}

ChangePassword.propTypes = {
  /** Al hacer click en Siguiente se gestiona el formulario */
  submitForm: PropTypes.func,
  /** Se encarga de manejar el contenido de cada campo del formulario */
  handleChange: PropTypes.func,
  /** Este es el password del usuario */
  password: PropTypes.string,
  /** Se activa en caso de que el password sea invalido */
  invalidPassword: PropTypes.bool,
  /** Indica si el Modal está cargando */
  isLoading: PropTypes.bool,
}

export default ChangePassword