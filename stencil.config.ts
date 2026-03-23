import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'labx-components',
  globalStyle: 'src/styles/tokens.css',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'labx-components',
      outputType: 'standalone',
      directivesProxyFile: 'angular-lib/src/lib/components.ts',
      directivesArrayFile: 'angular-lib/src/lib/index.ts',
      valueAccessorConfigs: [
        {
          elementSelectors: ['labx-input'],
          event: 'labxChange',
          targetAttr: 'value',
          type: 'text',
        },
      ],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
