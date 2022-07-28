import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  minimal?: boolean
  icon?: string
  as?: React.ElementType
} & ButtonTypes

export const Button: React.ForwardRefRenderFunction<
  S.WrapperProps,
  ButtonProps
> = (
  {
    children,
    icon,
    size = 'medium',
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => {
  console.log('button', icon)

  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      {...props}
    >
      <img src={icon} />
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
