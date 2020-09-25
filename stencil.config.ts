import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'ds-canal',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '../../custom-elements',
      proxiesFile: './dist/component-library-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
    sass(),
  ],
};
