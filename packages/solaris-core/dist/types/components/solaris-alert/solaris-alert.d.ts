import { IconParams } from '../../types/icons/icon';
import { Size } from '../../types/common/size';
import { MessageType } from '../../types/common/message';
import { UnitString } from '../../types/common/unit-string';
export declare class SolarisAlert {
  __title?: String;
  icon?: IconParams;
  radius?: Size;
  type?: MessageType;
  iconPosition?: 'left' | 'right';
  maxWidth?: UnitString;
  bordered?: boolean;
  generateClass(): string;
  render(): any;
}
