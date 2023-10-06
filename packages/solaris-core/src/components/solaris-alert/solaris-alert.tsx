import { Component, Prop, h } from '@stencil/core';
import { IconParams } from '../../types/icons/icon';
import { Size } from '../../types/common/size';
import { MessageType } from '../../types/common/message';
import { UnitString } from '../../types/common/unit-string';
import { parseIcon } from '../../common/Base_Core/format/parse-icon/parser-icon';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-alert',
  styleUrl: 'solaris-alert.scss',
  shadow: true,
})
export class SolarisAlert {
  @Prop() __title?: String;
  @Prop() icon?: IconParams;
  @Prop() radius?: Size = 'default';
  @Prop() type?: MessageType = 'info';
  @Prop() iconPosition?: 'left' | 'right' = 'left';
  @Prop() maxWidth?: UnitString;
  @Prop() bordered?: boolean = false;
  generateClass() {
    return classes('alert', `alert-${this.iconPosition}`, `alert-${this.type}`, this.bordered && 'alert-bordered', `border-${this.radius}`);
  }
  render() {
    return (
      <solaris-flex role="banner" gap={16} class={this.generateClass()} style={{ maxWidth: this.maxWidth && unitFormatter(this.maxWidth) }}>
        {this.icon && <solaris-block>{parseIcon(this.icon)}</solaris-block>}
        <solaris-block>
          <solaris-typography variant="h6">{this.__title}</solaris-typography>
          <solaris-block>
            <slot />
          </solaris-block>
        </solaris-block>
      </solaris-flex>
    );
  }
}
