import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'solaris-tabs',
  styleUrl: 'solaris-tabs.scss',
  shadow: true,
})
export class SolarisTabs {
  @State() activeTab: string = '';

  @Listen('tabSelected')
  tabSelectedHandler(event: CustomEvent<string>) {
    this.activeTab = event.detail;
  }

  render() {
    return (
      <div class="tabs-container">
        <div class="tabs">
          <slot name="tab"></slot>
        </div>
        <div class="tab-panels">
          <slot name="tab-panel"></slot>
        </div>
      </div>
    );
  }
}
