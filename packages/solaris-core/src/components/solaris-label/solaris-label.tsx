import { Component, Prop, h } from '@stencil/core';
import { TypographyVariant } from '../../types/common/typography-variants';
import { IconName } from '../../types/icons/icon';
import { MessageType } from '../../types/common/message';

@Component({
  tag: 'solaris-label',
  styleUrl: 'solaris-label.scss',
  shadow: true,
})
export class SolarisLabel {
  @Prop() element: TypographyVariant = 'p';
  @Prop() icon: IconName;
  @Prop() variant: MessageType | 'default' = 'default';

  render() {
    return (
      <this.element class={`label label-${this.variant}`}>
        {this.icon && <solaris-icon class="label-icon" name={this.icon} />}
        <slot />
      </this.element>
    );
  }
}
