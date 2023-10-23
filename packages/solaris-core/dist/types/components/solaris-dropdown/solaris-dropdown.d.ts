import { ColorScheme, UnitString } from '../../components';
export declare class SolarisDropdown {
  button: Element;
  top?: UnitString;
  left?: UnitString;
  decorated?: boolean;
  colorScheme?: ColorScheme;
  arrowPosition?: 'left' | 'right';
  backdrop?: boolean;
  close: boolean;
  toggle(): void;
  render(): any;
}
