import { Component, Prop, h } from '@stencil/core';
import { ContainerType } from '../../types/common/container';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { ColumnSize } from '../../types/common/column-size';

@Component({
  tag: 'solaris-column',
  styleUrl: 'solaris-column.scss',
  shadow: true,
})
export class SolarisColumn {
  @Prop() element: ContainerType = 'div';
  @Prop() col: ColumnSize = 'auto';
  @Prop() xl: ColumnSize = 'auto';
  @Prop() lg: ColumnSize = 'auto';
  @Prop() md: ColumnSize = 'auto';
  @Prop() sm: ColumnSize = 'auto';
  @Prop() xs: ColumnSize = 'auto';

  render() {
    return (
      <this.element
        class={classes(
          `col${this.col ? `-${this.col}` : ''}`,
          { [`col-xl-${this.xl}`]: this.xl },
          { [`col-lg-${this.lg}`]: this.lg },
          { [`col-md-${this.md}`]: this.md },
          { [`col-sm-${this.sm}`]: this.sm },
          { [`col-xs-${this.xs}`]: this.xs },
        )}
      >
        <slot />
      </this.element>
    );
  }
}
