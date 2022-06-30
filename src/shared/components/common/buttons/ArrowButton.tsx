import { FC, ReactNode } from 'react';
import {
  ThemeUIStyleObject,
  ThemeProvider as DefaultThemeProvider,
  ButtonProps as ThemeUIButtonProps,
  Button as ThemeUIButton,
} from 'theme-ui';
import { ButtonVariants } from '../../../configs/theme/types';
import { ReactComponent as ArrowSvg } from '../../../assets/icons/arrowButton.svg';

type ButtonProps = {
  sx?: ThemeUIStyleObject;
  children?: ReactNode;
  onClick?: () => void;
  variant?: keyof ButtonVariants;
} & ThemeUIButtonProps;

const ArrowButton: FC<ButtonProps> = ({
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
      <ArrowSvg />
    </ThemeUIButton>
  );
};

export default ArrowButton;
