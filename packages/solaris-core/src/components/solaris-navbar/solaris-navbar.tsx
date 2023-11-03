import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { ColorScheme } from '../../types/common/color-scheme';

@Component({
  tag: 'solaris-navbar',
  styleUrl: 'solaris-navbar.scss',
  shadow: true,
})
export class SolarisNavbar {
  @Prop() position: 'fixed' | 'relative' = 'relative';
  @Prop() decoration: 'top' | 'left' | 'right' | 'bottom' | 'none' = 'none';
  @Prop() colorScheme: ColorScheme = 'supernova';

  render() {
    return (
      <nav class={classes('navbar', this.position, `decoration-${this.decoration}`, `navbar-${this.colorScheme}`)}>
        <slot />
      </nav>
    );
  }
}
