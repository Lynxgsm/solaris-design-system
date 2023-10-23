import { Color } from '../../types/common/color-scheme';
import { FontFamily } from '../../types/text/font-family';
import { TitleType } from '../../types/text/title';
import { FontWeight } from '../../types/text/weight';
import { UnitString } from '../../types/common/unit-string';
export declare class SolarisTypography {
  colorScheme?: Color;
  fontFamily?: FontFamily;
  variant?: 'p' | TitleType | 'link' | 'caption' | 'subtitle' | 'small';
  underline?: boolean;
  width?: UnitString;
  truncated?: boolean;
  weight?: FontWeight;
  render(): any;
}
