import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: '';
    display: table;
  }

  &:after {
    clear: both;
  }
`
