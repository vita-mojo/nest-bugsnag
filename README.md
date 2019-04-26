<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

 <p align="center">A Nest module wrapper for bugsnag logger.</p>
 
<p align="center">
<a href=""><img src="" alt="NPM Version" /></a>
<a href=""><img src="" alt="Package License" /></a>
<a href=""><img src="" alt="NPM Downloads" /></a>
</p>

## Description

A [Nest](https://github.com/nestjs/nest) module wrapper for [bugsnag-js](https://github.com/bugsnag/bugsnag-js) logger.

## Installation

```bash
$ npm i nest-bugsnag --save
```

## Quick Start

Import the `BugsnagModule` into the module. For example `AppModule`:

```typescript
import { Module } from '@nestjs/common';
import { BugsnagModule } from 'nest-bugsnag';

@Module({
  imports: [
    BugsnagModule.forRoot({
      // options
    }),
  ],
})
export class AppModule { }
```

Then you can inject BugsnagService. Example:

```typescript
import { Controller } from '@nestjs/common';
import { BugsnagService } from 'nest-bugsnag';

@Controller('cats')
export class CatsController {
  constructor(private readonly logger: BugsnagService) { }
}
```

BugsnagService has instance property which wrap bugsnag client. So you can access it by calling:

```typescript
this.logger.instance.notify('message');
```

Note that `BugsnagModule` is a global module, it will be available in all you feature modules.

## Async configuration Sample

```typescript
import { Module } from '@nestjs/common';
import { BugsnagModule } from 'nest-bugsnag';
import { ConfigService } from 'nest-config';

@Module({
  imports: [
    BugsnagModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        // options
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule { }
```

The factory might be async and is able to inject dependencies through the `inject` option.

## Keywords
bugsnagJs, nestJs, logger
