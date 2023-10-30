import { Component, Prop, h } from '@stencil/core';
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
  assetsDirs: ['../../fonts'],
})
export class SolarisTypography {
  @Prop() colorScheme?: Color = 'black';
  @Prop() fontFamily?: FontFamily = 'roboto';
  @Prop() variant?: 'p' | TitleType | 'link' | 'caption' | 'subtitle' | 'small' = 'p';
  @Prop() underline?: boolean = false;
  @Prop() width?: UnitString = 'auto';
  @Prop() truncated?: boolean = false;
  @Prop() weight?: FontWeight = 'regular';

  render() {
    return (
      <this.variant
        style={{
          display: 'inline-block',
        }}
        class={classes(this.variant, this.colorScheme, this.fontFamily, this.underline ? 'underline' : '', this.weight, this.truncated ? 'truncated' : '')}
      >
        <slot />
      </this.variant>
    );
  }
}
