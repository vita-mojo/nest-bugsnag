import { DynamicModule, Global, Module } from '@nestjs/common';

import { BugsnagModuleAsyncOptions, BugsnagModuleOptions } from './bugsnag.interfaces';
import { createBugsnagProviders, createBugsnagAsyncProviders } from './bugsnag.providers';

@Global()
@Module({})
export class BugsnagModule {
  static forRoot(options: BugsnagModuleOptions): DynamicModule {
    const providers = createBugsnagProviders(options);

    return {
      module: BugsnagModule,
      providers: providers,
      exports: providers,
    };
  }

  static forRootAsync(options: BugsnagModuleAsyncOptions): DynamicModule {
    const providers = createBugsnagAsyncProviders(options);

    return {
      module: BugsnagModule,
      providers: providers,
      exports: providers,
    };
  }
}
