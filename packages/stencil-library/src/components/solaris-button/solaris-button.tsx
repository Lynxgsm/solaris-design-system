import { Component, Prop, h } from '@stencil/core';
import { Variant } from '../../types/common/variants';
import { ColorScheme } from '../../types/common/color-scheme';
import { UnitString } from '../../types/common/unit-string';
import { Size } from '../../types/common/size';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';

@Component({
  tag: 'solaris-button',
  styleUrl: 'solaris-button.scss',
  shadow: true,
})
export class SolarisButton {
  @Prop() variant: Variant = 'default';
  @Prop() colorScheme: ColorScheme = 'supernova';
  @Prop() href: string;
  @Prop() radius?: UnitString;
  @Prop() size?: Size;
  @Prop() fullWidth?: boolean;

  generateStyle() {
    const variant = `button-${this.variant || 'default'}`;
    const size = `button-${this.size || 'm'}`;
    const colorScheme = `button-${this.colorScheme}`;
    return classes(variant, size, colorScheme);
  }

  render() {
    return (
      <button
        class={this.generateStyle()}
        style={{
          borderRadius: this.radius && unitFormatter(this.radius, '%'),
          width: this.fullWidth ? '100%' : undefined,
        }}
      >
        <slot />
      </button>
    );
  }
}
