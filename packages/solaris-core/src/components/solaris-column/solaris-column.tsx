import { Component, Prop, h } from '@stencil/core';
import { Size, UnitString } from '../../components';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-column',
  styleUrl: 'solaris-column.scss',
  shadow: true,
})
export class SolarisColumn {
  @Prop() gap: UnitString;
  @Prop() col: Size = 'md';

  render() {
    return (
      <solaris-flex direction="column" gap={this.gap} class={classes(`col ${this.col ? `-${this.col}` : ''}`)}>
        <slot />
      </solaris-flex>
    );
  }
}
