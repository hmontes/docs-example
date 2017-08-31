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
const IndexPassword = ({...props, closeBtn, isLoading}) => {
  return(
    <Modal {...props} closeBtn={!isLoading ? closeBtn : null}>
      <Wrap>
        <p>
          Ingresa tu dirección de correo electrónico. Una vez ingresado, vas a recibir un email con instrucciones para cambiar tu contraseña.
        </p>
        <Form onSubmit={props.submitForm}>
          
          <Form.Label input required style={{marginTop: '22px'}}>Dirección de Email</Form.Label>
          <Form.Input invalid={props.invalidEmail} email placeholder="Ingresa tu dirección de correo aquí..." name="email" value={props.email} onChange={props.handleChange} />
          
          <LineSeparator />

          <Button isLoading={props.isLoading} mid wide style={{marginTop: '22px'}}>Siguiente</Button>

        </Form>
      </Wrap>
    </Modal>
  )
}

IndexPassword.propTypes = {
  /** Al hacer click en Siguiente se gestiona el formulario */
  submitForm: PropTypes.func,
  /** Se encarga de manejar el contenido de cada campo del formulario */
  handleChange: PropTypes.func,
  /** Este es el correo del usuario */
  email: PropTypes.string,
  /** Se activa en caso de que el email sea invalido */
  invalidEmail: PropTypes.bool,
  /** Indica si el Modal está cargando */
  isLoading: PropTypes.bool,
}

export default IndexPassword

/* 
export default (props) => (
  <div>
    <Title>Cambio de Contraseña</Title>
    <LineSeparator />
    <p>
      Ingresa tu dirección de correo electrónico. Una vez ingresado, vas a recibir un email con instrucciones para cambiar tu contraseña.
    </p>

    <form onSubmit={props.handleSubmit}>
      <Label style={{marginTop: '22px'}} htmlFor="email_Adress" required>Dirección de Email</Label>
      <Input type="email" name="email" onChange={props.handleChange} value={props.email} placeholder="Ingresa tu dirección de correo aquí..."/>

      <SendButton grey margin onClick={props.sendBtn}>Ingresar</SendButton>
    
    </form>
  </div>
)
*/