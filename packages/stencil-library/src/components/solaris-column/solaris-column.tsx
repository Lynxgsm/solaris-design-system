import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'solaris-column',
  styleUrl: 'solaris-column.scss',
  shadow: true,
})
export class SolarisColumn {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
