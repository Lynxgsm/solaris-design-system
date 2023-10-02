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
  @Prop() backgroundColor?: ColorScheme;
  @Prop() backgroundImage?: string;
  @Prop() content?: string;
  @Prop() variant?: 'rectangle' | 'circle' | 'square';
  @Prop() size?: Size;
  render() {
    return (
      <solaris-flex
        class={classes('avatar', `avatar-${this.backgroundColor || 'supernova'}`, `avatar-${this.variant}`)}
        style={{ backgroundImage: `url(${this.backgroundImage})` }}
        justifyContent="center"
        alignItems="center"
      >
        <strong
          class={classes(`text-${this.size || 'm'}`, {
            ['visibility-none']: this.backgroundImage,
          })}
        >
          <div>{this.content}</div>
        </strong>
      </solaris-flex>
    );
  }
}
