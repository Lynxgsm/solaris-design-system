import { Component, Prop, h } from '@stencil/core';
import { Size } from '../../types/common/size';
import { IconName, IconVariant } from '../../types/icons/icon';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-icon',
  styleUrl: 'solaris-icon.scss',
  shadow: true,
})
export class SolarisIcon {
  @Prop() size?: Size;
  @Prop() variant?: IconVariant = 'regular';
  @Prop() name?: IconName;
  render() {
    return <i class={classes('icon', `icon-${this.name}-${this.variant}`, `text-${this.size}`)} />;
  }
}
