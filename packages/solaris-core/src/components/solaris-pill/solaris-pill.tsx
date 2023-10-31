import { Component, Prop, h } from '@stencil/core';
import { MessageType } from '../../types/common/message';
import { Size } from '../../types/common/size';

@Component({
  tag: 'solaris-pill',
  styleUrl: 'solaris-pill.scss',
  shadow: true,
})
export class SolarisPill {
  @Prop() label: string;
  @Prop() count: number;
  @Prop() position: 'left' | 'right' = 'right';
  @Prop() active: boolean;
  @Prop() type: MessageType;
  @Prop() size: Size;
  @Prop() loading: boolean = false;

  render() {
    return (
      <button class={`button ${this.active ? 'active' : ''}`}>
        <solaris-flex gap={8} alignItems="center" direction={this.position === 'right' ? 'row' : 'row-reverse'}>
          <solaris-typography class={`label`} variant="h7" weight={this.active ? 'bold' : 'regular'} innerStyle={{ padding: '0', lineHeight: '.1px' }}>
            {this.label}
          </solaris-typography>
          <div class={`count ${this.active ? 'active' : ''}`}>
            <solaris-typography weight="bold" innerStyle={{ padding: '0', lineHeight: '.1px', fontSize: '12px' }}>
              {this.count}
            </solaris-typography>
          </div>
        </solaris-flex>
      </button>
    );
  }
}
