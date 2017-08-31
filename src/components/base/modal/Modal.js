import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Animation, Svg, LineSeparator } from '../'

const Container = styled.div`
  z-index: 10000;
  border-radius: 3px;
  border-bottom: 3px solid rgb(136, 160, 185);
  /* overflow: hidden; */
  max-width: ${props => props.maxWidth - 20}px;
  width: ${props => props.width}px;
  /* height: $-props => props.height-px; */
  max-height: ${props => props.maxHeight - 100}px;
  height: ${props => props.height}px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background: #FFF;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  transition: margin-top 0.3s ease, height 0.3s ease;
  
  @media screen and (max-width: 630px) {
    height: ${props => props.height + 50}px;
  }
  

  & > div > svg {
    fill: #fff;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    position: absolute;
    top: 14px;
    left: 14px;
    pointer-events: none;
  }
`
const BaseModal = styled.div`
  /* height: 100%; */
  height: 95%;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  position: relative;
`
const Content = styled.div`
  /* padding: 20px; */
  padding: 22px 22px 26px;
  zoom: 1;
  width: 100%;
  
  & hr {
    margin-bottom: 22px;
  }

  & input {
		&[type="text"], &[type="email"],
		&[type="password"] {
			margin-bottom: 24px;
		}
  }
  /*
  @media screen and (max-width: 630px) {
    padding-top: 0;
  }

  &:after {
    clear: both;
  }

  &:after, &:before {
    content: '';
    display: table;
  }
  */
`

const CloseBtn = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #101314;
  cursor: pointer;
  position: absolute;
  z-index: 1061;
  top: -19px;
  right: -19px;
  &:hover {
    background-color: #fb5216;
  }
`

const Title = styled.h4`
  font-size: 1.375em;
  margin-bottom: 15px
`

/** Componente Modal. Util para realizar distintos avisos */
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render() {
    return(
      <Animation in={this.props.open} type="scale" timeout={500} >
        <Container height={this.props.height} maxHeight={this.state.height} width={this.props.width} maxWidth={this.state.width}>
          <CloseBtn onClick={!this.props.loading ? this.props.closeBtn : null}>
            <Svg.Plus />
          </CloseBtn>
          <BaseModal>
            <Content>
              {this.props.title ? 
                <div>
                  <Title>{this.props.title}</Title> 
                  <LineSeparator />
                </div>
              : null}
              {this.props.children}
            </Content>
          </BaseModal>
        </Container>
      </Animation>
    );
  }
}
  

Modal.defaultProps = {
  width: 430,
  height: 420,
  open: false,
  loading: false
}

Modal.propTypes = {
  /** Si es positivo, el modal se muestra */
  open: PropTypes.bool,
  /** Función que se ejecuta desde el exterior para cerrar el modal */
  closeBtn: PropTypes.func,
  /** Si se activa, el boton cerrar deja de funcionar (Para cuando hay una operación de carga) */
  loading: PropTypes.bool,
  /** Valor por defecto del ancho. Por defecto es de 4300px */
  width: PropTypes.number,
  /** Valor por defecto del largo. Por defecto es de 420px */
  height: PropTypes.number
}

export default Modal