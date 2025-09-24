# Class: Dictionary\<Type\>

Defined in: [dictionary.ts:1](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L1)

## Type Parameters

### Type

`Type`

## Constructors

### Constructor

```ts
new Dictionary<Type>(data?: Record<string, Type>): Dictionary<Type>;
```

Defined in: [dictionary.ts:4](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L4)

#### Parameters

##### data?

`Record`\<`string`, `Type`\>

#### Returns

`Dictionary`\<`Type`\>

## Methods

### data()

```ts
data(): Record<string, Type>;
```

Defined in: [dictionary.ts:36](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L36)

Returns all data as a JS object

#### Returns

`Record`\<`string`, `Type`\>

***

### get()

```ts
get(key: string): Type;
```

Defined in: [dictionary.ts:26](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L26)

Returns the value for the given key

#### Parameters

##### key

`string`

#### Returns

`Type`

***

### has()

```ts
has(key: string): boolean;
```

Defined in: [dictionary.ts:16](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L16)

Checks whether a value with a given key exists in the dictionary

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### keys()

```ts
keys(): string[];
```

Defined in: [dictionary.ts:31](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L31)

Returns a list of keys

#### Returns

`string`[]

***

### missing()

```ts
missing(key: string): boolean;
```

Defined in: [dictionary.ts:21](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L21)

Checks whether a value with a given key is missing from the dictionary

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### set()

```ts
set(key: string, value: Type): this;
```

Defined in: [dictionary.ts:9](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/dictionary.ts#L9)

Sets the value for the key

#### Parameters

##### key

`string`

##### value

`Type`

#### Returns

`this`
