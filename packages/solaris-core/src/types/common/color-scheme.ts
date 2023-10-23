import Values from '../../../../constants';
const { ColorSchemeValues, ColorValues } = Values;

export type ColorScheme = (typeof ColorSchemeValues)[number];
export type Color = ColorScheme | (typeof ColorValues)[number];
