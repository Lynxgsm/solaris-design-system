declare const ColorSchemeValues: readonly ["danger", "supernova", "nebula-blue", "cobalt", "comet", "black", "white"], ColorValues: readonly ["danger", "supernova", "nebula-blue", "cobalt", "comet", "black", "white", "supernova", "supernova-dark", "nebula-blue-shades", "nebula-blue", "nebula-blue-dark", "cobalt-dark", "cobalt", "comet", "comet-dark", "additional-link", "success-dark", "success-light", "error-light", "error", "error-dark", "alert-light", "alert-dark", "info-light", "info-dark", "darkest", "darker", "neutral", "disabled-light", "light", "lighter", "white", "grey-1", "grey-2", "grey-3", "grey-4"];
export type ColorScheme = (typeof ColorSchemeValues)[number];
export type Color = ColorScheme | (typeof ColorValues)[number];
export {};
