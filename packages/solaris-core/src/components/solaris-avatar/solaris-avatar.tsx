import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { ColorScheme } from '../../types/common/color-scheme';
import { Size } from '../../types/common/size';

@Component({
  tag: 'solaris-avatar',
  styleUrl: 'solaris-avatar.scss',
  shadow: true,
})
export class SolarisAvatar {
  @Prop() backgroundColor?: ColorScheme = 'supernova';
  @Prop() backgroundImage?: string;
  @Prop() variant?: 'rectangle' | 'circle' | 'square' = 'circle';
  @Prop() size?: Size = 'md';
  render() {
    return (
      <solaris-flex
        class={classes('avatar', `avatar-${this.backgroundColor}`, `avatar-${this.variant}`)}
        style={{ backgroundImage: `url(${this.backgroundImage})` }}
        justifyContent="center"
        alignItems="center"
      >
        <solaris-typography variant="body" class={classes(`text-${this.size}`, `${this.backgroundImage ? 'visibility-none' : ''}`)}>
          <slot />
        </solaris-typography>
      </solaris-flex>
    );
  }
}
