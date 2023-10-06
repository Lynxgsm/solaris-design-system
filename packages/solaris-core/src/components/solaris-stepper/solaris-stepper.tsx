import { Component, Prop, h } from '@stencil/core';
import { ColorScheme } from '../../types/common/color-scheme';
import { classes } from '../../common/Base_Core/format/classes/classes';

@Component({
  tag: 'solaris-stepper',
  styleUrl: 'solaris-stepper.scss',
  shadow: true,
})
export class SolarisStepper {
  @Prop() steps: string[];
  @Prop() colorScheme?: ColorScheme = 'supernova';
  @Prop() currentIndex?: number = -1;

  render() {
    return (
      <solaris-flex direction="column" class={classes('stepper', this.colorScheme)}>
        {this.steps.map((step, index) => (
          <solaris-flex key={index} alignItems="flex-end" justifyContent="space-between" gap={12}>
            <solaris-typography class="text">{step}</solaris-typography>
            <solaris-flex alignItems="center" direction="column" class={classes('step', index <= this.currentIndex && 'active')}>
              <solaris-block class={classes('branch', !index && 'first')}></solaris-block>
              <solaris-flex justifyContent="center" alignItems="center" class="circle"></solaris-flex>
            </solaris-flex>
          </solaris-flex>
        ))}
      </solaris-flex>
    );
  }
}
