import { Component, Prop, h } from '@stencil/core';
import { MessageType } from '../../types/common/message';
import { TypographyVariant } from '../../types/common/typography-variants';
import { Color } from '../../types/common/color-scheme';

@Component({
  tag: 'solaris-status-text',
  styleUrl: 'solaris-status-text.scss',
  shadow: true,
})
export class SolarisStatusText {
  @Prop() type: MessageType | 'disabled' = 'warning';
  @Prop() variant: TypographyVariant = 'p';
  @Prop() dot: 'left' | 'right' | 'none' = 'left';

  textColorScheme = () => {
    const mapping: { [key in MessageType | 'disabled']: Color } = {
      'error': 'error',
      'warning': 'alert-dark',
      'info-nebula': 'nebula-blue',
      'info': 'info-dark',
      'success': 'success-dark',
      'disabled': 'darker',
    };

    return mapping[this.type];
  };

  render() {
    return (
      <solaris-flex alignItems="center" direction={this.dot === 'right' ? 'row-reverse' : 'row'} gap={8} class={`status-text status-text-${this.type} status-text-dot-${this.dot}`}>
        <div class={`status-dot status-dot-${this.type} status-dot-${this.dot}`}></div>
        <solaris-typography colorScheme={this.textColorScheme()} weight="bold" variant={this.variant}>
          <slot />
        </solaris-typography>
      </solaris-flex>
    );
  }
}
