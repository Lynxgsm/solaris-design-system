import { ColorScheme, Size, UnitString, Variant } from '../../components';
import { IconParams } from '../../types/icons/icon';

export type SolarisButtonProps = HTMLButtonElement & {
  variant?: Variant;
  colorScheme?: ColorScheme;
  href?: string;
  radius?: UnitString;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: IconParams;
  rightIcon?: IconParams;
};
