import { FunctionalComponent, h } from '@stencil/core';
import { SolarisFlexProps } from './solaris-flex.type';
import './solaris-flex.scss';
import { useFormat } from '../../common/Base_Core/format';

export const SolarisFlex: FunctionalComponent<SolarisFlexProps> = ({ justifyContent, alignItems, gap, flexDirection, flexWrap, breakpoints }, children) => {
  const { classes, unitFormatter } = useFormat();
  return (
    <div
      class={classes('flex', breakpoints ?? '')}
      style={{
        justifyContent,
        alignItems,
        gap: gap && unitFormatter(gap),
        flexWrap,
        flexDirection,
      }}
    >
      {children}
    </div>
  );
};
