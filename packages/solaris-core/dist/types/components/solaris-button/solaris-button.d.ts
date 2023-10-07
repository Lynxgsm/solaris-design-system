import { Variant } from '../../types/common/variants';
import { ColorScheme } from '../../types/common/color-scheme';
import { UnitString } from '../../types/common/unit-string';
import { Size } from '../../types/common/size';
export declare class SolarisButton {
  variant: Variant;
  colorScheme: ColorScheme;
  href: string;
  radius: UnitString;
  size: Size;
  fullWidth: boolean;
  generateStyle(): string;
  render(): any;
}
