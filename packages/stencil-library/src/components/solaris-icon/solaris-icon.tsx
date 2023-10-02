import { FunctionalComponent, h } from '@stencil/core';
import { useFormat } from '../../common/Base_Core/format';
import './solaris-icon.scss';
import { IconProps } from './solaris-icon.type';

export const SolarisIcon: FunctionalComponent<IconProps> = ({ name, size, variant }) => {
  const { classes } = useFormat();
  return <i class={classes('icon', `icon-${name}-${variant || 'regular'}`, `text-${size}`)} />;
};
