import { Component, Prop, h } from '@stencil/core';
import { Size } from '../../components';

@Component({
  tag: 'solaris-card',
  styleUrl: 'solaris-card.scss',
  shadow: true,
})
export class SolarisCard {
  @Prop() elevation: number;
  @Prop() radius: Size;
  render() {
    return (
      <solaris-block class={`card card-${this.elevation || 0} border-${this.radius || 'none'}`}>
        <slot />
      </solaris-block>
    );
  }
}
