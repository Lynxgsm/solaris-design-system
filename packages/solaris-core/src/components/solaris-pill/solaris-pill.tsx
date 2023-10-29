import { Component, Prop, h } from '@stencil/core';

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

  render() {
    return (
      <button class={`button button-${this.position}`}>
        <p class="count">{this.count}</p>
        <p class="label">{this.label}</p>
      </button>
    );
  }
}
