import { ColorScheme } from '../../types/common/color-scheme';
import { Size } from '../../types/common/size';
export declare class SolarisAvatar {
  backgroundColor?: ColorScheme;
  backgroundImage?: string;
  variant?: 'rectangle' | 'circle' | 'square';
  size?: Size;
  render(): any;
}
