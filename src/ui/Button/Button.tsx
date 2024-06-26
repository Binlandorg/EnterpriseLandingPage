import { StyledButton } from './Button.styles'
import { IButton } from 'types/ui/Button'

const Button: React.FC<IButton> = ({
  size = 'md',
  children,
  leftIcon,
  rightIcon,
  $isfullwidth,
  className,
  ...props
}) => {
  return (
    <StyledButton
      {...props}
      size={size}
      $isfullwidth={$isfullwidth}
      className={className}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  )
}

export default Button
