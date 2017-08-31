// import React from 'react'
import styled from 'styled-components'

// Input
var Input = styled.input.attrs({
  type: props => 
    props.email ? 'email' 
    : props.radio ? 'radio' 
    : props.checkbox ? 'checkbox' 
    : props.image ? 'image'
    : props.password ? 'password'
    : 'text'
  
})`
  color: #888;
  font-family: "Titillium Web",sans-serif;
  font-size: 0.8125em;
  border-radius: ${props => !props.rounded ? 0 : '200px'};
  display: block;

	&[type="text"], &[type="email"],
	&[type="password"], &[type="number"] {
		width: 100%;
		height: 40px;
		padding: 0 15px;
		border: 1px solid ${props => !props.invalid ? '#ebebeb' : '#ea2e68'};
		line-height: 40px;
	}

	&[type="number"] {
		padding-right: 0;
  }

  &[type="radio"], &[type="checkbox"] {
    display: none;

    &:checked + .checkbox {
      border-color: #fb5216;
      background-color: #fb5216;
    }
      
    &:checked + span > span {
      display: block;
    }
  
  }
`
// Placeholder Inputs
// ::placeholder {
//     color: #b2b2b2;
// 	  font-family: "Titillium Web",sans-serif;
// 	  font-size: 13px;
// 	  font-weight: 600;
//   }

export default Input