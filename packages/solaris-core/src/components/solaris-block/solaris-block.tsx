import { Component, Prop, h } from '@stencil/core';
import { Breakpoints } from '../../types/common/breakpoints';
import { ContainerType } from '../../types/common/container';

@Component({
  tag: 'solaris-block',
  styleUrl: 'solaris-block.scss',
  shadow: true,
})
export class SolarisBlock {
  @Prop() breakpoints: Breakpoints;
  @Prop() element: ContainerType = 'div';

  render() {
    return (
      <this.element class={`block ${this.breakpoints || ''}`}>
        <slot />
      </this.element>
    );
  }
}
