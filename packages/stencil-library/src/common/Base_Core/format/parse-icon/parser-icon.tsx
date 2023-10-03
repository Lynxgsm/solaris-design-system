import { h } from '@stencil/core';
import { IconParams } from '../../../../types/icons/icon';
import { SolarisIcon } from '../../../../components/solaris-icon/solaris-icon';

export const parseIcon = (icon: IconParams) => {
  return typeof icon === 'string' ? <SolarisIcon name={icon} variant="regular" /> : <SolarisIcon name={icon.name} variant={icon.variant} size={icon.size} />;
};
