import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'solaris-core',
  globalStyle: 'src/global.scss',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'fonts',
          dest: 'assets/fonts',
        },
      ],
    },
    reactOutputTarget({
      componentCorePackage: 'solaris-core',
      includeDefineCustomElements: true,
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
