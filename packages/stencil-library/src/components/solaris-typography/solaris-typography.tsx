import { Component, Element, Prop, h } from '@stencil/core';
import { Color } from '../../types/common/color-scheme';
import { FontFamily } from '../../types/text/font-family';
import { TitleType } from '../../types/text/title';
import { FontWeight } from '../../types/text/weight';
import { UnitString } from '../../types/common/unit-string';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-typography',
  styleUrl: 'solaris-typography.scss',
  shadow: true,
})
export class SolarisTypography {
  @Prop() colorScheme?: Color = 'black';
  @Prop() fontFamily?: FontFamily = 'roboto';
  @Prop() variant?: 'body' | TitleType | 'link' | 'caption' | 'subtitle' | 'small' = 'body';
  @Prop() underline?: boolean;
  @Prop() width?: UnitString;
  @Prop() truncated?: boolean;
  @Prop() weight?: FontWeight = 'regular';

  render() {
    return (
      <this.variant class={classes(this.colorScheme, this.fontFamily, this.underline && 'underline')}>
        <slot />
      </this.variant>
    );
  }
}
