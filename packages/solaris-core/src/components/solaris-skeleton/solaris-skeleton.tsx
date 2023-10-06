import { Component, Prop, h } from '@stencil/core';
import { Size } from '../../types/common/size';
import { UnitString } from '../../types/common/unit-string';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-skeleton',
  styleUrl: 'solaris-skeleton.scss',
  shadow: true,
})
export class SolarisSkeleton {
  @Prop() animated: boolean = true;
  @Prop() radius?: Size = 'default';
  @Prop() height?: UnitString = '30px';
  @Prop() width?: UnitString = 'auto';
  render() {
    return <div class={classes('skeleton', `border-${this.radius}`, this.animated ? 'animated' : '')} style={{ height: `${this.height}`, width: `${this.width}` }} />;
  }
}
