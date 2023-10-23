import { applyPolyfills, defineCustomElements, } from "../../solaris-core/loader";
export const ComponentLibrary = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
