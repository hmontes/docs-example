import styled from 'styled-components'

const Item = styled.div`
  flex-grow: 1;
  margin-right: 1.5%;
  width: 100%;
  @media screen and (max-width: 630px) {
    
    &:nth-child(n+2) {
      & button {
        margin-top: 22px;
      }
      & > .label.select, & > input {
        margin-top: 22px;
      }
    }
  }
`

export default Item