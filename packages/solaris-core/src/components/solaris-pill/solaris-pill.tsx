import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'solaris-pill',
  styleUrl: 'solaris-pill.scss',
  shadow: true,
})
export class SolarisPill {
  @Prop() label: string;
  @Prop() count: number;
  @Prop() position: 'left' | 'right';
  @Prop() active: boolean;

  render() {
    return (
      <button class="button">
        <p>{this.count}</p>
        <p>{this.label}</p>
      </button>
    );
  }
}
