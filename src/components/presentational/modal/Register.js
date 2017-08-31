import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Modal, Form, Button } from '../../base'

/** Este es el modal de registro. Se gestiona para crear una cuenta de usuario. Puedes hacerlo vía Facebook, Google
 * o por email
 */
const Register = (props) => {
  return(
    <div>
      <Modal {...props} closeBtn={!props.isLoading ? props.closeBtn : null}>
        <Form onSubmit={props.submitForm}>
          <Form.Group>
            <Form.Item>
              <Form.Label input required>Nombre</Form.Label>
              <Form.Input invalid={props.invalidFirstName} text placeholder="Ingresa tu nombre aquí" name="firstName" value={props.firstName} onChange={props.handleChange} />
            </Form.Item>
            <Form.Item>
              <Form.Label input required>Apellido</Form.Label>
              <Form.Input invalid={props.invalidLastName} text placeholder="Ingresa tu apellido aquí" name="lastName" value={props.lastName} onChange={props.handleChange}/>
            </Form.Item>
          </Form.Group>

          <Form.Label input required>Dirección de Email</Form.Label>
          <Form.Input invalid={props.invalidEmail} email placeholder="Ingresa tu dirección de correo aquí..." name="email" value={props.email} onChange={props.handleChange} />

          <Form.Label input required>Contraseña</Form.Label>
          <Form.Input invalid={props.invalidPassword} password placeholder="Ingresa tu contraseña aquí..." name="password" value={props.password} onChange={props.handleChange} />

          <Form.Label input required>Indica tu Fecha de Nacimiento</Form.Label>
          <Form.Group>
            <Form.Item>
              <Form.Select invalid={props.invalidDate} name="day" value={props.day} onChange={props.handleChange} >
                <option value="00">Día</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </Form.Select>
            </Form.Item>
              
            <Form.Item>
              <Form.Select invalid={props.invalidDate} name="month" value={props.month} onChange={props.handleChange}>
                <option value="0">Mes</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </Form.Select>
            </Form.Item>

            <Form.Item>
              <Form.Input invalid={props.invalidDate} text placeholder="Año" name="year" value={props.year} onChange={props.handleChange}/>
            </Form.Item>
          </Form.Group>

          <Form.Label input required>Indica tu genero</Form.Label>
          <Form.Group>
            <Form.Item>
              <Form.Radio name="gender" value="male" checked={props.gender === 'male'} onChange={props.handleChange}>Hombre</Form.Radio>
            </Form.Item>
            <Form.Item>
              <Form.Radio name="gender" value="female" checked={props.gender === 'female'} onChange={props.handleChange}>Mujer</Form.Radio>
            </Form.Item>
          </Form.Group>

          <Button isLoading={props.isLoading} mid wide style={{marginTop: '22px'}}>Siguiente</Button>

        </Form>
      </Modal>
    </div>
  )
}

Register.propTypes = {
  /** Al hacer click en Siguiente se gestiona el formulario */
  submitForm: PropTypes.func,
  /** Indica si el Modal está cargando */
  isLoading: PropTypes.bool,
  /** Se encarga de manejar el contenido de cada campo del formulario */
  handleChange: PropTypes.func,
  /** Es el primer nombre */
  firstName: PropTypes.string,
  /** Se activa en caso de estar vacio el nombre */
  invalidFirstName: PropTypes.bool,
  /** Es el apellido de la persona */
  lastName: PropTypes.string,
  /** Se activa en caso de estar vacio el apellido */
  invalidLastName: PropTypes.bool,
  /** Este es el correo del usuario */
  email: PropTypes.string,
  /** Se activa en caso de que el email sea invalido */
  invalidEmail: PropTypes.bool,
  /** Este es el password del usuario */
  password: PropTypes.string,
  /** Se activa en caso de que el password sea invalido */
  invalidPassword: PropTypes.bool,
  /** Día de nacimiento del usuario */
  day: PropTypes.number,
  /** Mes de nacimiento del usuario */
  month: PropTypes.number,
  /** Año de nacimiento del usuario */
  year: PropTypes.number,
  /** Se activa en caso de que la fecha sea invalida */
  invalidDate: PropTypes.bool,
  /** El genero del usuario */
  gender: PropTypes.string
}

export default Register