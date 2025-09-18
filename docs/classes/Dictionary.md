[**@freearhey/core**](../README.md)

***

[@freearhey/core](../README.md) / Dictionary

# Class: Dictionary\<Type\>

Defined in: [dictionary.ts:1](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L1)

## Type Parameters

### Type

`Type`

## Constructors

### Constructor

> **new Dictionary**\<`Type`\>(`data?`): `Dictionary`\<`Type`\>

Defined in: [dictionary.ts:4](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L4)

#### Parameters

##### data?

`Record`\<`string`, `Type`\>

#### Returns

`Dictionary`\<`Type`\>

## Methods

### data()

> **data**(): `Record`\<`string`, `Type`\>

Defined in: [dictionary.ts:36](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L36)

Returns all data as a JS object

#### Returns

`Record`\<`string`, `Type`\>

***

### get()

> **get**(`key`): `Type`

Defined in: [dictionary.ts:26](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L26)

Returns the value for the given key

#### Parameters

##### key

`string`

#### Returns

`Type`

***

### has()

> **has**(`key`): `boolean`

Defined in: [dictionary.ts:16](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L16)

Checks whether a value with a given key exists in the dictionary

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### keys()

> **keys**(): `string`[]

Defined in: [dictionary.ts:31](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L31)

Returns a list of keys

#### Returns

`string`[]

***

### missing()

> **missing**(`key`): `boolean`

Defined in: [dictionary.ts:21](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L21)

Checks whether a value with a given key is missing from the dictionary

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: [dictionary.ts:9](https://github.com/freearhey/core-js/blob/c1e6c9f8cab8b3dcf3b54b7eef0c855b591ac948/src/dictionary.ts#L9)

Sets the value for the key

#### Parameters

##### key

`string`

##### value

`Type`

#### Returns

`this`
