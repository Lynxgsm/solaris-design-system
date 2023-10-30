import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'solaris-core',
  globalStyle: 'src/global.scss',
  extras: {
    enableImportInjection: true,
  },
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      // copy: [
      //   {
      //     src: 'fonts',
      //     dest: 'dist/assets/fonts',
      //   },
      // ],
    },
    reactOutputTarget({
      componentCorePackage: 'solaris-core',
      includeDefineCustomElements: true,
      loaderDir: './loader',
      proxiesFile: '../solaris-react/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: 'solaris-core',
      includeDefineCustomElements: true,
      proxiesFile: '../solaris-vue/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
