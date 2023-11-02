import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-tab-panel',
  styleUrl: 'solaris-tabs.scss',
  shadow: true,
})
export class SolarisTabPanel {
  @Prop() tab: string;
  @Prop() active: boolean;

  render() {
    return (
      <div style={{ display: this.active ? 'block' : 'none' }}>
        <slot></slot>
      </div>
    );
  }
}
