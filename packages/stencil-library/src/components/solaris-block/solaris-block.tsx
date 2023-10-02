import { Component, Prop, h } from '@stencil/core';
import { Breakpoints } from '../../types/common/breakpoints';

@Component({
  tag: 'solaris-block',
  styleUrl: 'solaris-block.scss',
  shadow: true,
})
export class SolarisBlock {
  @Prop() breakpoints: Breakpoints;

  render() {
    return (
      <div class={`block ${this.breakpoints}`}>
        <slot />
      </div>
    );
  }
}
