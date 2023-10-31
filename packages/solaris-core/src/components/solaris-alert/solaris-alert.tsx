import { Component, Prop, h } from '@stencil/core';
import { IconParams } from '../../types/icons/icon';
import { Size } from '../../types/common/size';
import { MessageType } from '../../types/common/message';
import { parseIcon } from '../../common/Base_Core/format/parse-icon/parser-icon';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-alert',
  styleUrl: 'solaris-alert.scss',
  shadow: true,
})
export class SolarisAlert {
  @Prop() icon?: IconParams;
  @Prop() radius?: Size = 'default';
  @Prop() type?: MessageType = 'info';
  @Prop() iconPosition?: 'left' | 'right' = 'left';
  @Prop() maxWidth?: number;
  @Prop() bordered?: boolean = false;
  generateClass() {
    return classes('alert', `alert-${this.iconPosition}`, `alert-${this.type}`, this.bordered && 'alert-bordered', `border-${this.radius}`);
  }
  render() {
    return (
      <solaris-flex role="banner" gap={16} class={this.generateClass()} style={{ maxWidth: `${this.maxWidth}px` }}>
        {this.icon && <solaris-icon name="alignment-bottom"></solaris-icon>}
        <solaris-block>
          <solaris-typography variant="h6">
            <slot name="title" />
          </solaris-typography>
          <solaris-block>
            <slot />
          </solaris-block>
        </solaris-block>
      </solaris-flex>
    );
  }
}
