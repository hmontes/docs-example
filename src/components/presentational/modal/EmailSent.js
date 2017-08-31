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
const EmailSent = ({...props, closeBtn, isLoading}) => {
  return(
    <Modal {...props} closeBtn={!isLoading ? closeBtn : null}>
      <Wrap>
        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        </p>
        <Form onSubmit={props.submitForm}>

          <Button mid wide style={{marginTop: '22px'}}>Entendido</Button>

        </Form>
      </Wrap>
    </Modal>
  )
}

EmailSent.propTypes = {
  /** Al hacer click en Siguiente se gestiona el formulario */
  submitForm: PropTypes.func,
}

export default EmailSent

/* 
export default (props) => (
  <div>
    <Title>Cuenta creada</Title>
    <LineSeparator />
    <p>
      La cuenta ha sido creada. Por favor, revisa tu correo para validar tu cuenta y poder aprovechar toda la experiencia de Ventoora
    </p>
    
    <SendButton grey style={{marginTop: '22px'}} onClick={props.closeModal}>Entendido</SendButton>
  </div>
)
*/