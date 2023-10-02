import { Component, Prop, State, Watch, h } from '@stencil/core';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';
import { ColorScheme, UnitString } from '../../components';

@Component({
  tag: 'solaris-dropdown',
  styleUrl: 'solaris-dropdown.scss',
  shadow: true,
})
export class SolarisDropdown {
  @Prop() button: Element;
  @Prop() top?: UnitString;
  @Prop() left?: UnitString;
  @Prop() decorated?: boolean;
  @Prop() colorScheme?: ColorScheme;
  @Prop() onClick?: (close: boolean) => void;
  @Prop() arrowPosition?: 'left' | 'right' = 'left';
  @Prop() backdrop?: boolean;

  @State() close: boolean = true;

  @Watch('close')
  watchStateHandler(newValue: boolean, oldValue: boolean) {
    console.log('The old value of busy is: ', oldValue);
    console.log('The new value of busy is: ', newValue);
  }

  toggle() {
    this.close = !this.close;
    console.log(`Close: ${this.close}`);
  }

  render() {
    return (
      <solaris-flex role="group" class="dropdown-wrapper">
        <button onClick={this.toggle} class="dropdown-button">
          <slot name="button" />
        </button>
        <solaris-block
          role="dialog"
          style={{
            transform: `translate(${unitFormatter(this.left)}, ${unitFormatter(this.top || 40)})`,
          }}
          class={classes('dropdown', { ['decorated']: this.decorated }, this.arrowPosition, `dropdown-${this.colorScheme || 'supernova'}`, {
            ['close']: close,
          })}
        >
          <slot name="content" />
        </solaris-block>
        <solaris-block
          role="complementary"
          onFocus={this.toggle}
          onClick={this.toggle}
          class={classes('backdrop', { ['close']: close }, { ['backdrop-visible']: this.backdrop })}
          tabIndex={0}
        ></solaris-block>
      </solaris-flex>
    );
  }
}
