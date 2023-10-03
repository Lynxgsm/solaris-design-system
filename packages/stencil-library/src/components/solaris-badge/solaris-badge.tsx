import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { MessageType } from '../../types/common/message';
import { IconParams } from '../../types/icons/icon';
import { parseIcon } from '../../common/Base_Core/format/parse-icon/parser-icon';
import { Size } from '../../types/common/size';

@Component({
  tag: 'solaris-badge',
  styleUrl: 'solaris-badge.scss',
  shadow: true,
})
export class SolarisBadge {
  @Prop() size?: Size = 'md';
  @Prop() type?: MessageType;
  @Prop() icon?: IconParams;
  @Prop() iconPosition?: 'left' | 'right' = 'left';
  @Prop() radius?: Size;

  render() {
    return (
      <solaris-flex class={classes('badge', `badge-${this.type}`, `badge-${this.size}`)} direction={`${this.iconPosition === 'left' ? 'row' : 'row-reverse'}`} alignItems="center">
        {this.icon && parseIcon(this.icon)}
        <span>
          <slot />
        </span>
      </solaris-flex>
    );
  }
}
