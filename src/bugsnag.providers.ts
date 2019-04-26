import { Provider } from '@nestjs/common';

import { BUGSNAG_MODULE_OPTIONS, BUGSNAG_MODULE_PROVIDER } from './bugsnag.constants';
import { BugsnagModuleAsyncOptions, BugsnagModuleOptions } from './bugsnag.interfaces';
import { BugsnagService } from './bugsnag.service';

export function createBugsnagProviders(loggerOpts: BugsnagModuleOptions): Provider[] {
  return [
    {
      provide: BUGSNAG_MODULE_PROVIDER,
      useFactory: () => new BugsnagService(loggerOpts),
    }
  ];
}

export function createBugsnagAsyncProviders(options: BugsnagModuleAsyncOptions): Provider[] {
  return [
    {
      provide: BUGSNAG_MODULE_OPTIONS,
      useFactory: options.useFactory,
      inject: options.inject || [],
    },
    {
      provide: BUGSNAG_MODULE_PROVIDER,
      useFactory: async (loggerOpts: BugsnagModuleOptions) => new BugsnagService(loggerOpts),
      inject: [BUGSNAG_MODULE_OPTIONS]
    }
  ];
}
