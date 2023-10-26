import { Size } from '../common/size';
import Values from '../../../../constants';

const { IconNameValues, IconVariantValues } = Values;
export type IconName = (typeof IconNameValues)[number];
export type IconVariant = (typeof IconVariantValues)[number];
export type IconParams = { name: IconName; variant?: IconVariant; size?: Size } | IconName;
