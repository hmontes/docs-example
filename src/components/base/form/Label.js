import React from 'react'
import styled from 'styled-components'

const StyleLabel = styled.label`
  display: block;
	margin-bottom: 12px;
  color: #888;
	font-size: 0.8125em;
	font-family: 'Titillium Web', sans-serif;
	font-weight: 600;
  cursor: pointer;
  
  &:last-child {
		margin-bottom: 0;
  }

  & strong {
    color: #2b373a;
  }

  & > .radio, & > .checkbox {
		display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    border: 1px solid #ebebeb;
    background-color: #f5f5f5;			
    position: relative;
    top: 5px;
  }
  
  & > .radio {		   
    border-radius: 50%;
    span {
      width: 6px;
      height: 6px;
      background-color: #fb5216;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 5px;
      display: none;
    }
	}
  
	& > .checkbox {
    border-radius: 4px;
    span {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      background: url('/static/images/check.png') no-repeat center;
      display: none;
    }
  }
  
`

const LabelInput = styled(StyleLabel)`
  color: #2b373a;
	font-weight: 700;
  margin-bottom: 14px;
  font-size: 0.875em;
  line-height: 1em;
  cursor: auto;
  
  ${props => props.required ?
    `
      &:after {
        content: '*';
        color: #fb5216;
        position: relative;
        left: 2px;
      }   
    `
  : null}
`

// Select
const SelectLabel = styled(StyleLabel)`
  width: 100%;
  display: inline-block;
  position: relative;
  
  svg {
    fill: #535d5f;
    width: 6px;
    height: 10px;
    position: absolute;
    top: 17px;
    right: 17px;
    transform: rotate(90deg);
  }
`

const Label = (props) => {
  if (props.input) return <LabelInput {...props} />
  else if (props.select) return <SelectLabel {...props} />
  else return <StyleLabel {...props} />
}

export default Label