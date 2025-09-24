# Class: Timer

Defined in: [timer.ts:7](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L7)

## Constructors

### Constructor

```ts
new Timer(options?: TimerOptions): Timer;
```

Defined in: [timer.ts:10](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L10)

#### Parameters

##### options?

`TimerOptions`

#### Returns

`Timer`

## Methods

### format()

```ts
format(format: string): string;
```

Defined in: [timer.ts:53](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L53)

Formats the elapsed time using placeholders (`HH`, `mm`, `ss`, `ms`, etc.)

#### Parameters

##### format

`string`

#### Returns

`string`

***

### ms()

```ts
ms(): number;
```

Defined in: [timer.ts:43](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L43)

Returns the elapsed time in milliseconds

#### Returns

`number`

***

### pause()

```ts
pause(): this;
```

Defined in: [timer.ts:22](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L22)

Pauses the timer

#### Returns

`this`

***

### resume()

```ts
resume(): this;
```

Defined in: [timer.ts:29](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L29)

Resumes the timer

#### Returns

`this`

***

### start()

```ts
start(): this;
```

Defined in: [timer.ts:15](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L15)

Starts the timer

#### Returns

`this`

***

### stop()

```ts
stop(): this;
```

Defined in: [timer.ts:36](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L36)

Stops the timer

#### Returns

`this`

***

### time()

```ts
time(): Time;
```

Defined in: [timer.ts:48](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/timer.ts#L48)

Returns an object of time fractions (`d`, `h`, `m`, `s`, `ms`)

#### Returns

`Time`
