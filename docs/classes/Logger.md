# Class: Logger

Defined in: [logger.ts:8](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L8)

## Constructors

### Constructor

```ts
new Logger(options?: LoggerOptions): Logger;
```

Defined in: [logger.ts:11](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L11)

#### Parameters

##### options?

[`LoggerOptions`](../type-aliases/LoggerOptions.md)

#### Returns

`Logger`

## Methods

### debug()

```ts
debug(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:46](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L46)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### error()

```ts
error(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:62](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L62)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### fail()

```ts
fail(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:34](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L34)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### info()

```ts
info(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:30](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L30)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### log()

```ts
log(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:58](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L58)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### mockTypes()

```ts
mockTypes(cb: () => any): void;
```

Defined in: [logger.ts:26](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L26)

#### Parameters

##### cb

() => `any`

#### Returns

`void`

***

### ready()

```ts
ready(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:42](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L42)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### start()

```ts
start(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:66](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L66)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### success()

```ts
success(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:70](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L70)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### trace()

```ts
trace(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:38](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L38)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### tree()

```ts
tree(object: object): void;
```

Defined in: [logger.ts:16](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L16)

Outputs the object to the console as a tree structure

#### Parameters

##### object

`object`

#### Returns

`void`

***

### verbose()

```ts
verbose(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:50](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L50)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`

***

### warn()

```ts
warn(message: any, ...args: any[]): void;
```

Defined in: [logger.ts:54](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/logger.ts#L54)

#### Parameters

##### message

`any`

##### args

...`any`[]

#### Returns

`void`
