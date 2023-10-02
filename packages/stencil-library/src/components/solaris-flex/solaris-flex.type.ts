import { ContainerProps } from '../../types/common/container.props';
import { UnitString } from '../../types/common/unit-string';

export type SolarisFlexProps = ContainerProps & {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: UnitString;
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};
