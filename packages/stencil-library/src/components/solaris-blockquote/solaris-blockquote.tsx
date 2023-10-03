import { Component, Prop, h } from '@stencil/core';
import { IconParams } from '../../types/icons/icon';
import { MessageType } from '../../types/common/message';
import { Size } from '../../types/common/size';
import { UnitString } from '../../types/common/unit-string';
import { classes } from '../../common/Base_Core/format/classes/classes';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';
import { parseIcon } from '../../common/Base_Core/format/parse-icon/parser-icon';

@Component({
  tag: 'solaris-blockquote',
  styleUrl: 'solaris-blockquote.scss',
  shadow: true,
})
export class SolarisBlockquote {
  @Prop() __title?: string;
  @Prop() icon?: IconParams;
  @Prop() radius?: Size;
  @Prop() type?: MessageType = 'info';
  @Prop() iconPosition?: 'left' | 'right' = 'left';
  @Prop() maxWidth?: UnitString;
  @Prop() bordered?: boolean;
  @Prop() decorationPosition?: 'top' | 'bottom' | 'left' | 'right' = 'top';

  render() {
    return (
      <solaris-flex
        role="banner"
        gap={16}
        class={classes(
          'blockquote',
          `blockquote-${this.iconPosition}`,
          `blockquote-decorated-${this.decorationPosition || 'left'}`,
          `blockquote-${this.type}`,
          this.bordered && 'blockquote-bordered',
        )}
        style={{ maxWidth: this.maxWidth && unitFormatter(this.maxWidth) }}
      >
        {this.icon && <solaris-block>{parseIcon(this.icon)}</solaris-block>}
        <solaris-block>
          <solaris-typography variant="h6">{this.__title}</solaris-typography>
          <slot />
        </solaris-block>
      </solaris-flex>
    );
  }
}
