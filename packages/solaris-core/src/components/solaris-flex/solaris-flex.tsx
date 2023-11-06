import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { ContainerType } from '../../types/common/container';

@Component({
  tag: 'solaris-flex',
  styleUrl: 'solaris-flex.scss',
  shadow: true,
})
export class SolarisFlex {
  @Prop() variant: ContainerType = 'div';
  @Prop() gap: number;
  @Prop() justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Prop() alignItems: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Prop() direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';
  @Prop() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'nowrap';
  @Prop() wide: boolean = true;

  render() {
    return (
      <this.variant
        class={classes('flex')}
        style={{
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
          gap: `${this.gap}px`,
          flexWrap: this.wrap,
          flexDirection: this.direction,
          flex: this.wide ? '1' : 'auto',
        }}
      >
        <slot />
      </this.variant>
    );
  }
}
