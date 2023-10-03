import { Component, Prop, h } from '@stencil/core';
import { UnitString } from '../../components';

@Component({
  tag: 'solaris-column',
  styleUrl: 'solaris-column.scss',
  shadow: true,
})
export class SolarisColumn {
  @Prop() gap: UnitString;

  render() {
    return (
      <solaris-flex direction="column" gap={this.gap}>
        <slot />
      </solaris-flex>
    );
  }
}
