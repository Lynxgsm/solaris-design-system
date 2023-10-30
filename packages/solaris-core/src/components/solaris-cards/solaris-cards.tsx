import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { Size } from '../../types/common/size';

@Component({
  tag: 'solaris-cards',
  styleUrl: 'solaris-cards.scss',
  shadow: true,
})
export class SolarisCards {
  @Prop() elevation: number;
  @Prop() radius: Size = 'default';

  render() {
    return (
      <solaris-flex direction="column" class={classes('cards', `cards-${this.elevation || 0}`, `border-${this.radius || 'none'}`)}>
        <slot />
      </solaris-flex>
    );
  }
}
