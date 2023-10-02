import { ColorScheme } from '../../types/common/color-scheme';
import { Size } from '../../types/common/size';
import { UnitString } from '../../types/common/unit-string';
import { Variant } from '../../types/common/variants';
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
