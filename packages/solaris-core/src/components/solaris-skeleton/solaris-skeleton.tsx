import { Component, Prop, h } from '@stencil/core';
import { Size } from '../../types/common/size';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-skeleton',
  styleUrl: 'solaris-skeleton.scss',
  shadow: true,
})
export class SolarisSkeleton {
  @Prop() animated: boolean = true;
  @Prop() radius?: Size = 'default';
  @Prop() height?: number = 32;
  @Prop() width?: number;
  render() {
    return <div class={classes('skeleton', `border-${this.radius}`, this.animated ? 'animated' : '')} style={{ height: `${this.height}px`, width: `${this.width}px` }} />;
  }
}
