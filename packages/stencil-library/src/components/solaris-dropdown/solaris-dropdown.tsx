import { Component, Listen, Prop, State, h } from '@stencil/core';
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
  @Prop() colorScheme?: ColorScheme = 'supernova';
  @Prop() arrowPosition?: 'left' | 'right' = 'left';
  @Prop() backdrop?: boolean;

  @State() close: boolean = true;
  @Listen('click', { capture: true })
  toggle() {
    this.close = !this.close;
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
          class={classes('dropdown', this.decorated ? 'decorated' : '', this.arrowPosition, `dropdown-${this.colorScheme}`, `${this.close ? 'close' : ''}`)}
        >
          <slot name="content" />
        </solaris-block>
        <solaris-block
          role="complementary"
          onFocus={this.toggle}
          onClick={this.toggle}
          class={classes('backdrop', this.close ? 'close' : '', this.backdrop ? 'backdrop-visible' : '')}
          tabIndex={0}
        ></solaris-block>
      </solaris-flex>
    );
  }
}
