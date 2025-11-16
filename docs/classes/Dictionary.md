# Class: Dictionary\<Type\>

Defined in: [dictionary.ts:1](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L1)

## Type Parameters

### Type

`Type`

## Constructors

### Constructor

```ts
new Dictionary<Type>(data?: Record<string, Type>): Dictionary<Type>;
```

Defined in: [dictionary.ts:4](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L4)

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

Defined in: [dictionary.ts:43](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L43)

Returns all data as a JS object

#### Returns

`Record`\<`string`, `Type`\>

***

### get()

```ts
get(key: string): Type;
```

Defined in: [dictionary.ts:33](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L33)

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

Defined in: [dictionary.ts:23](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L23)

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

Defined in: [dictionary.ts:38](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L38)

Returns a list of keys

#### Returns

`string`[]

***

### missing()

```ts
missing(key: string): boolean;
```

Defined in: [dictionary.ts:28](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L28)

Checks whether a value with a given key is missing from the dictionary

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### remove()

```ts
remove(key: string): this;
```

Defined in: [dictionary.ts:16](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L16)

Remove the value by the key

#### Parameters

##### key

`string`

#### Returns

`this`

***

### set()

```ts
set(key: string, value: Type): this;
```

Defined in: [dictionary.ts:9](https://github.com/freearhey/core-js/blob/0c10d35e9fecd0b07759d2140f131adbb53ae09a/src/dictionary.ts#L9)

Sets the value for the key

#### Parameters

##### key

`string`

##### value

`Type`

#### Returns

`this`
