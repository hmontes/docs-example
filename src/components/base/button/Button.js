import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Loader } from '../'

const color = ({primary, secondary, facebook, google}) => {
  if (primary) return 'fb5216'
  else if (secondary) return '1cbdf9'
  else if (facebook) return '355599'
  else if (google) return 'dd4b39'
  else return '9B9B9B' // Regresa gris
}

const Group = styled.div`
display: flex;
justify-content: space-around;
`

const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	pointer-events: ${props => props.disabled || props.isLoading ? 'none' : 'auto'};
	width: ${props => props.wide ? '100%' : props.mid ? '160px' : props.medium ? '170px' : '120px'};
	height: ${props => props.mid ? 42 : props.medium ? 50 : 30}px;
	border-radius: 4px;
	color: #fff;
	font-family: 'Titillium Web', sans-serif;
	font-size: ${props => props.mid ? 0.875 : props.medium ? 1 : 0.75}em;
	font-weight: 700;
	line-height: ${props => props.mid ? 42 : props.medium ? 50 : 30}px;
  text-align: center;
  background-color: #${props => color(props)};
	${props => props.center ? 'margin: 0 auto;' : null}

  &:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 5px #444;
  }

`

const Button = ({...props, children, isLoading}) => (
  <StyledButton {...props}>
		{!isLoading ? children : <Loader white />}
	</StyledButton>
)

Button.Group = Group

Button.propTypes = {
	/** Activa la carga en el boton (y de paso lo desactiva) */
	isLoading: PropTypes.bool,
	/** Desactiva el boton */
	disabled: PropTypes.bool,
	/** Si se activa, el boton se centra */
	center: PropTypes.bool,
	/**
	 * @param { SyntheticEvent } event Evento en React. Recomendado usar event.preventDefault()
	 */
  onClick: PropTypes.func
}

export default Button