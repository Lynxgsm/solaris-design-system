import { Component, Prop, h } from '@stencil/core';
import { Color } from '../../types/common/color-scheme';
import { FontFamily } from '../../types/text/font-family';
import { TitleType } from '../../types/text/title';
import { FontWeight } from '../../types/text/weight';
import { UnitString } from '../../types/common/unit-string';

@Component({
  tag: 'solaris-typography',
  styleUrl: 'solaris-typography.scss',
  shadow: true,
})
export class SolarisTypography {
  @Prop() colorScheme: Color = 'inherit';
  @Prop() fontFamily?: FontFamily = 'roboto';
  @Prop() variant?: 'p' | TitleType | 'link' | 'caption' | 'subtitle' | 'small' = 'p';
  @Prop() underline?: boolean = false;
  @Prop() width?: UnitString = 'auto';
  @Prop() truncated?: boolean = false;
  @Prop() weight: FontWeight = 'regular';
  @Prop() lineHeight: number = 1.25;
  @Prop() innerStyle: { [key: string]: string } = {};
  @Prop() margin: number = 0;

  render() {
    return (
      <this.variant
        style={{ lineHeight: this.lineHeight, margin: this.margin, ...this.innerStyle }}
        class={`${this.variant} text-${this.colorScheme} ${this.fontFamily} ${this.underline ? 'underline' : ''} ${this.truncated ? 'truncated' : ''} ${this.weight}`}
      >
        <slot />
      </this.variant>
    );
  }
}
