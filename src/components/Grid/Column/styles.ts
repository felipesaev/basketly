import styled from 'styled-components'

export const Column = styled.div`
  float: left;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: ${(props) => (props.grid ? (props.grid / 12) * 100 : '8:33')}%;
  }
`
