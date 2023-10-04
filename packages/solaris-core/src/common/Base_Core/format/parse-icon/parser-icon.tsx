import { h } from '@stencil/core';
import { IconParams } from '../../../../types/icons/icon';

export const parseIcon = (icon: IconParams) => {
  return typeof icon === 'string' ? <solaris-icon name={icon} variant="regular" /> : <solaris-icon name={icon.name} variant={icon.variant} size={icon.size} />;
};
