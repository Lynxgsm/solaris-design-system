import Values from '../../../../constants';
const { VariantValues } = Values;

export type Variant = (typeof VariantValues)[number];
