import { ColorSchemeValues, ColorValues } from '../../constants/color-scheme';

export type ColorScheme = (typeof ColorSchemeValues)[number];
export type Color = ColorScheme | (typeof ColorValues)[number];
