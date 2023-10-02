import { FunctionalComponent, h } from '@stencil/core';
import './solaris-row.scss';
import { useFormat } from '../../common/Base_Core/format';
import { SolarisRowProps } from './solaris-row';
import { SolarisFlex } from '../solaris-flex/solaris-flex';

export const SolarisRow: FunctionalComponent<SolarisRowProps> = (props, children) => {
  const { classes } = useFormat();
  return (
    <SolarisFlex {...props} className={classes('row', props.classList)} flexWrap="wrap">
      {children}
    </SolarisFlex>
  );
};
