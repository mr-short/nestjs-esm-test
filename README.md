# NestJS ESM Failures

## Changes from stock Nest example app

1. Added Swagger generation (per the docs)
2. Changed tsconfig to export `es6` generated code

## With Nest Build

Run `npm run esm:fail1`

Error:

```
ReferenceError: openapi is not defined
    at Object.<anonymous> (~/dist/app.controller.js:26:5)
```

## With tsc build

Run `npm run esm:fail2`

Error:

```
(node:715613) UnhandledPromiseRejectionWarning: TypeError: Cannot read property '0' of undefined
    at ~/node_modules/@nestjs/swagger/dist/services/parameter-metadata-accessor.js:14:24
```
