import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-flex',
  styleUrl: 'solaris-flex.scss',
  shadow: true,
})
export class SolarisFlex {
  @Prop() gap: number;
  @Prop() justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Prop() alignItems: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'flex-start';
  @Prop() direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row';
  @Prop() wrap: 'nowrap' | 'wrap' | 'wrap-reverse' = 'wrap';

  render() {
    return (
      <div
        class={classes('flex')}
        style={{
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
          gap: `${this.gap}px`,
          flexWrap: this.wrap,
          flexDirection: this.direction,
        }}
      >
        <slot />
      </div>
    );
  }
}
