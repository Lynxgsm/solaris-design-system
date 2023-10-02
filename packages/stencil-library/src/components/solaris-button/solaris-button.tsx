import { FunctionalComponent, h } from '@stencil/core';
import { unitFormatter } from '../../common/Base_Core/format/unit/unit';
import { SolarisButtonProps } from './solaris-button.type';
import { useFormat } from '../../common/Base_Core/format';
import { parseIcon } from '../../common/Base_Core/format/parse-icon/parser-icon';

export const SolarisButton: FunctionalComponent<SolarisButtonProps> = (props, children) => {
  const { classes } = useFormat();
  return (
    <button
      class={classes(props.className, `button-${props.variant || 'default'}`, `button-${props.size || 'm'}`, `button-${props.colorScheme || 'supernova'}`)}
      style={{
        borderRadius: props.radius && unitFormatter(props.radius, '%'),
        width: props.fullWidth ? '100%' : undefined,
      }}
    >
      {props.leftIcon && parseIcon(props.leftIcon)}
      <span class="text-content">{children}</span>
      {props.rightIcon && parseIcon(props.rightIcon)}
    </button>
  );
};
