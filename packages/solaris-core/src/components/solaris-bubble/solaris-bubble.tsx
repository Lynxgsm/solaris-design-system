import { Component, Prop, h } from '@stencil/core';
import { MessageType } from '../../types/common/message';

@Component({
  tag: 'solaris-bubble',
  styleUrl: 'solaris-bubble.scss',
  shadow: true,
})
export class SolarisBubble {
  @Prop() type?: MessageType | 'default' = 'default';
  @Prop() text: string = '';
  @Prop() innerStyle: { [key: string]: string } = {};

  render() {
    return (
      <div class={`bubble bubble-${this.type}`} style={this.innerStyle}>
        <solaris-typography weight="bold" variant="small">
          {this.text}
        </solaris-typography>
      </div>
    );
  }
}
