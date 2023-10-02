import { Component, Prop, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { UnitString } from '../../components';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';

@Component({
  tag: 'solaris-flex',
  styleUrl: 'solaris-flex.scss',
  shadow: true,
})
export class SolarisFlex {
  @Prop() gap: UnitString;
  @Prop() justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  @Prop() alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  @Prop() flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  @Prop() flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';

  render() {
    return (
      <div
        class={classes('flex')}
        style={{
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
          gap: this.gap && unitFormatter(this.gap),
          flexWrap: this.flexWrap,
          flexDirection: this.flexDirection,
        }}
      >
        <slot />
      </div>
    );
  }
}
