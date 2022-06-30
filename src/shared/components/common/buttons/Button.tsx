import { FC, ReactNode } from 'react';
import {
  ThemeUIStyleObject,
  ThemeProvider as DefaultThemeProvider,
  ButtonProps as ThemeUIButtonProps,
  Button as ThemeUIButton,
} from 'theme-ui';
import { ButtonVariants } from '../../../configs/theme/types';

type ButtonProps = {
  sx?: ThemeUIStyleObject;
  children?: ReactNode;
  onClick?: () => void;
  variant?: keyof ButtonVariants;
} & ThemeUIButtonProps;

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  sx,
  ...rest
}) => {
  return (
    <ThemeUIButton
      sx={{
        ...sx,
      }}
      variant={variant}
      {...rest}
    >
      {children}
    </ThemeUIButton>
  );
};

export default Button;
