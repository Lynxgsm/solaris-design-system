import { MessageType } from '../../types/common/message';
import { IconParams } from '../../types/icons/icon';
import { Size } from '../../types/common/size';
export declare class SolarisBadge {
  size?: Size;
  type?: MessageType;
  icon?: IconParams;
  iconPosition?: 'left' | 'right';
  radius?: Size;
  render(): any;
}
