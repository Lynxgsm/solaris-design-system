import { Component, Prop, h } from '@stencil/core';
import { UnitString } from '../../types/common/unit-string';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';

@Component({
  tag: 'solaris-list-tile',
  styleUrl: 'solaris-list-tile.scss',
  shadow: true,
})
export class SolarisListTile {
  @Prop() __title: string;
  @Prop() width?: UnitString;

  render() {
    return (
      <button class="tile-container" style={{ width: this.width ? unitFormatter(this.width) : '100%' }}>
        <solaris-flex class="tile" justifyContent="space-between" alignItems="center">
          <solaris-flex alignItems="center" gap={16}>
            <div>
              <slot name="leading" />
            </div>
            <solaris-flex direction="column">
              <solaris-typography variant="h6" fontFamily="roboto" weight="medium">
                {this.__title}
              </solaris-typography>
              <slot />
            </solaris-flex>
          </solaris-flex>
          <div>
            <slot name="trailing" />
          </div>
        </solaris-flex>
      </button>
    );
  }
}
