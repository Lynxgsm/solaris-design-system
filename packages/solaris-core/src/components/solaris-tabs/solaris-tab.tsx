import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-tab',
  styleUrl: 'solaris-tabs.scss',
  shadow: true,
})
export class SolarisTab {
  @Prop() tab: string;
  @Event() tabSelected: EventEmitter<string>;

  private handleTabClick = () => {
    this.tabSelected.emit(this.tab);
  };

  render() {
    return (
      <div class="tab" onClick={this.handleTabClick}>
        <slot></slot>
      </div>
    );
  }
}
