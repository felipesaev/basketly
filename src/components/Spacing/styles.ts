import styled from 'styled-components'

export const Spacing = styled.div`
  margin-top: ${(props) => (props.top ? '12px' : '4px')};
  margin-bottom: ${(props) => (props.bottom ? '12px' : '4px')}; ;
`
