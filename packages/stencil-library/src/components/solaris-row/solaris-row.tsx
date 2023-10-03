import { Component, Prop, h } from '@stencil/core';
import { UnitString } from '../../components';

@Component({
  tag: 'solaris-row',
  styleUrl: 'solaris-row.scss',
  shadow: true,
})
export class SolarisRow {
  @Prop() gap: UnitString;
  render() {
    return (
      <solaris-flex gap={this.gap}>
        <slot />
      </solaris-flex>
    );
  }
}
