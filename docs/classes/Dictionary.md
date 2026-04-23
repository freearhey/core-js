# Class: Dictionary\<Type\>

Defined in: [dictionary.ts:3](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L3)

## Type Parameters

### Type

`Type`

## Constructors

### Constructor

```ts
new Dictionary<Type>(data?: Record<string, Type>): Dictionary<Type>;
```

Defined in: [dictionary.ts:6](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L6)

#### Parameters

##### data?

`Record`\<`string`, `Type`\>

#### Returns

`Dictionary`\<`Type`\>

## Methods

### clone()

```ts
clone(): Dictionary<Type>;
```

Defined in: [dictionary.ts:45](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L45)

Creates a shallow copy of dictionary

#### Returns

`Dictionary`\<`Type`\>

***

### data()

```ts
data(): Record<string, Type>;
```

Defined in: [dictionary.ts:52](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L52)

Returns all data as a JS object

#### Returns

`Record`\<`string`, `Type`\>

***

### get()

```ts
get(key: string): Type;
```

Defined in: [dictionary.ts:35](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L35)

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

Defined in: [dictionary.ts:25](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L25)

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

Defined in: [dictionary.ts:40](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L40)

Returns a list of keys

#### Returns

`string`[]

***

### missing()

```ts
missing(key: string): boolean;
```

Defined in: [dictionary.ts:30](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L30)

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

Defined in: [dictionary.ts:18](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L18)

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

Defined in: [dictionary.ts:11](https://github.com/freearhey/core-js/blob/master/src/dictionary.ts#L11)

Sets the value for the key

#### Parameters

##### key

`string`

##### value

`Type`

#### Returns

`this`
