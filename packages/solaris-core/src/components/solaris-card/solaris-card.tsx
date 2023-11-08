import { Component, Prop, h } from '@stencil/core';
import { Size } from '../../types/common/size';

@Component({
  tag: 'solaris-card',
  styleUrl: 'solaris-card.scss',
  shadow: true,
})
export class SolarisCard {
  @Prop() elevation: number = 0;
  @Prop() radius: Size | 'none' = 'none';
  render() {
    return (
      <solaris-block>
        <div class={`card card-${this.elevation} border-${this.radius}`}>
          <slot />
        </div>
      </solaris-block>
    );
  }
}
