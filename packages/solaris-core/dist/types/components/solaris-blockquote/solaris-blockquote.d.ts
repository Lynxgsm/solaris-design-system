import { IconParams } from '../../types/icons/icon';
import { MessageType } from '../../types/common/message';
import { Size } from '../../types/common/size';
import { UnitString } from '../../types/common/unit-string';
export declare class SolarisBlockquote {
  __title?: string;
  icon?: IconParams;
  radius?: Size;
  type?: MessageType;
  iconPosition?: 'left' | 'right';
  maxWidth?: UnitString;
  bordered?: boolean;
  decorationPosition?: 'top' | 'bottom' | 'left' | 'right';
  render(): any;
}
