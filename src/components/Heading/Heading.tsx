import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'huge'
}

export const Heading = ({
  children,
  color = 'white',
  size = 'medium'
}: HeadingProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}
