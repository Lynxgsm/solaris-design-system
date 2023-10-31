import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-row',
  styleUrl: 'solaris-row.scss',
  shadow: true,
})
export class SolarisRow {
  @Prop() gap: number;
  render() {
    return (
      <solaris-flex gap={this.gap}>
        <slot />
      </solaris-flex>
    );
  }
}
