import { Bugsnag } from '@bugsnag/js';

export interface BugsnagClientInterface extends Bugsnag.Client {}

export type BugsnagModuleOptions = string | Bugsnag.IConfig;

export interface BugsnagModuleAsyncOptions {
  useFactory: (
    ...args: any[]
  ) => Promise<BugsnagModuleOptions> | BugsnagModuleOptions;
  inject?: any[];
}
