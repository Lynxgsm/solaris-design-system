import { p as promiseResolve, b as bootstrapLazy } from './index-88e70c1b.js';
export { s as setNonce } from './index-88e70c1b.js';

/*
 Stencil Client Patch Browser v4.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["solaris-typography",[[1,"solaris-typography",{"colorScheme":[1,"color-scheme"],"fontFamily":[1,"font-family"],"variant":[1],"underline":[4],"width":[8],"truncated":[4],"weight":[1]}]]],["solaris-alert",[[1,"solaris-alert",{"__title":[16],"icon":[1],"radius":[1],"type":[1],"iconPosition":[1,"icon-position"],"maxWidth":[8,"max-width"],"bordered":[4]}]]],["solaris-blockquote",[[1,"solaris-blockquote",{"__title":[1],"icon":[1],"radius":[1],"type":[1],"iconPosition":[1,"icon-position"],"maxWidth":[8,"max-width"],"bordered":[4],"decorationPosition":[1,"decoration-position"]}]]],["solaris-stepper",[[1,"solaris-stepper",{"steps":[16],"colorScheme":[1,"color-scheme"],"currentIndex":[2,"current-index"]}]]],["solaris-avatar",[[1,"solaris-avatar",{"backgroundColor":[1,"background-color"],"backgroundImage":[1,"background-image"],"variant":[1],"size":[1]}]]],["solaris-badge",[[1,"solaris-badge",{"size":[1],"type":[1],"icon":[1],"iconPosition":[1,"icon-position"],"radius":[1]}]]],["solaris-dropdown",[[1,"solaris-dropdown",{"button":[16],"top":[8],"left":[8],"decorated":[4],"colorScheme":[1,"color-scheme"],"arrowPosition":[1,"arrow-position"],"backdrop":[4],"close":[32]},[[2,"click","toggle"]]]]],["solaris-list-tile",[[1,"solaris-list-tile",{"__title":[1],"width":[8]}]]],["solaris-card",[[1,"solaris-card",{"elevation":[2],"radius":[1]}]]],["solaris-column",[[1,"solaris-column",{"gap":[8],"col":[1]}]]],["solaris-row",[[1,"solaris-row",{"gap":[8]}]]],["solaris-button",[[1,"solaris-button",{"variant":[1],"colorScheme":[1,"color-scheme"],"href":[1],"radius":[8],"size":[1],"fullWidth":[4,"full-width"]}]]],["solaris-navbar",[[1,"solaris-navbar",{"position":[1],"decoration":[1],"colorScheme":[1,"color-scheme"]}]]],["solaris-skeleton",[[1,"solaris-skeleton",{"animated":[4],"radius":[1],"height":[8],"width":[8]}]]],["solaris-icon",[[1,"solaris-icon",{"size":[1],"variant":[1],"name":[1]}]]],["solaris-block",[[1,"solaris-block",{"breakpoints":[1]}]]],["solaris-flex",[[1,"solaris-flex",{"gap":[8],"justifyContent":[1,"justify-content"],"alignItems":[1,"align-items"],"direction":[1],"wrap":[1]}]]]], options);
});

//# sourceMappingURL=solaris-core.js.map