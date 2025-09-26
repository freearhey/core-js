# Class: Collection\<Type\>

Defined in: [collection.ts:7](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L7)

## Type Parameters

### Type

`Type`

## Constructors

### Constructor

```ts
new Collection<Type>(items?: Type[]): Collection<Type>;
```

Defined in: [collection.ts:10](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L10)

#### Parameters

##### items?

`Type`[]

#### Returns

`Collection`\<`Type`\>

## Methods

### add()

```ts
add(data: Type): this;
```

Defined in: [collection.ts:38](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L38)

Adds a new element to the end of the collection

#### Parameters

##### data

`Type`

#### Returns

`this`

***

### all()

```ts
all(): Type[];
```

Defined in: [collection.ts:204](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L204)

Returns the underlying array represented by the collection

#### Returns

`Type`[]

***

### clone()

```ts
clone(): Collection<Type>;
```

Defined in: [collection.ts:197](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L197)

Creates a shallow copy of collection

#### Returns

`Collection`\<`Type`\>

***

### concat()

```ts
concat(collection: Collection<Type>): this;
```

Defined in: [collection.ts:127](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L127)

Combines elements from both collections into one

#### Parameters

##### collection

`Collection`\<`Type`\>

#### Returns

`this`

***

### count()

```ts
count(): number;
```

Defined in: [collection.ts:77](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L77)

Returns the number of items in the collection

#### Returns

`number`

***

### filter()

```ts
filter(iterator: CollectionIterator): Collection<Type>;
```

Defined in: [collection.ts:106](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L106)

Iterates over elements of collection, returning a collection of all elements that meets the requirements

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Collection`\<`Type`\>

***

### find()

```ts
find(iterator: CollectionIterator): Type;
```

Defined in: [collection.ts:33](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L33)

Return the first element of the collection that meets the requirements

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Type`

***

### first()

```ts
first(iterator?: CollectionIterator): Type;
```

Defined in: [collection.ts:15](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L15)

Gets the first element of collection

#### Parameters

##### iterator?

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Type`

***

### forEach()

```ts
forEach(callback: (item: Type, index?: number) => void | Promise<void>): this;
```

Defined in: [collection.ts:113](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L113)

Iterates over elements of collection and invokes callback for each element

#### Parameters

##### callback

(`item`: `Type`, `index?`: `number`) => `void` \| `Promise`\<`void`\>

#### Returns

`this`

***

### groupBy()

```ts
groupBy(iterator: CollectionIterator): Dictionary<Type[]>;
```

Defined in: [collection.ts:183](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L183)

Creates a Dictionary composed of keys generated from the results of running each element of collection thru iterator

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

[`Dictionary`](Dictionary.md)\<`Type`[]\>

***

### includes()

```ts
includes(value: CollectionIterator): boolean;
```

Defined in: [collection.ts:166](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L166)

Checks if value is in collection

#### Parameters

##### value

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`boolean`

***

### indexOf()

```ts
indexOf(item: Type): number;
```

Defined in: [collection.ts:87](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L87)

Gets the index at which the first occurrence of value is found in collection

#### Parameters

##### item

`Type`

#### Returns

`number`

***

### intersects()

```ts
intersects(collection: Collection<Type>): Collection<Type>;
```

Defined in: [collection.ts:50](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L50)

Returns a new collection with all unique elements that are in both collections

#### Parameters

##### collection

`Collection`\<`Type`\>

#### Returns

`Collection`\<`Type`\>

***

### intersectsBy()

```ts
intersectsBy(collection: Collection<Type>, key: string): Collection<Type>;
```

Defined in: [collection.ts:59](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L59)

Returns a new collection with all unique elements that are in both collections, taking into account the specified requirements

#### Parameters

##### collection

`Collection`\<`Type`\>

##### key

`string`

#### Returns

`Collection`\<`Type`\>

***

### isEmpty()

```ts
isEmpty(): boolean;
```

Defined in: [collection.ts:136](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L136)

Returns `true` if the collection is empty

#### Returns

`boolean`

***

### isNotEmpty()

```ts
isNotEmpty(): boolean;
```

Defined in: [collection.ts:141](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L141)

Returns `true` if the collection is not empty

#### Returns

`boolean`

***

### join()

```ts
join(separator: string): string;
```

Defined in: [collection.ts:82](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L82)

Converts all elements in collection into a string separated by separator

#### Parameters

##### separator

`string`

#### Returns

`string`

***

### keyBy()

```ts
keyBy(iterator: CollectionIterator): Dictionary<Type>;
```

Defined in: [collection.ts:176](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L176)

Creates a Dictionary composed of keys generated from the results of running each element of collection thru iterator

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

[`Dictionary`](Dictionary.md)\<`Type`\>

***

### last()

```ts
last(predicate?: CollectionIterator): Type;
```

Defined in: [collection.ts:24](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L24)

Gets the last element of collection

#### Parameters

##### predicate?

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Type`

***

### map()

```ts
map<Type>(iterator: (item: any) => Type): Collection<Type>;
```

Defined in: [collection.ts:190](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L190)

Creates a new Collection of values by running each element in collection thru iterator

#### Type Parameters

##### Type

`Type`

#### Parameters

##### iterator

(`item`: `any`) => `Type`

#### Returns

`Collection`\<`Type`\>

***

### missing()

```ts
missing(value: CollectionIterator): boolean;
```

Defined in: [collection.ts:171](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L171)

Checks whether a value is missing from the collection

#### Parameters

##### value

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`boolean`

***

### remove()

```ts
remove(iterator: CollectionIterator): Collection<Type>;
```

Defined in: [collection.ts:120](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L120)

Removes all elements from collection that meets the requirements

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Collection`\<`Type`\>

***

### sample()

```ts
sample(): Type;
```

Defined in: [collection.ts:45](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L45)

Gets a random element from collection

#### Returns

`Type`

***

### slice()

```ts
slice(start?: number, end?: number): Collection<Type>;
```

Defined in: [collection.ts:70](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L70)

Creates a slice of collection from start up to, but not including, end

#### Parameters

##### start?

`number`

##### end?

`number`

#### Returns

`Collection`\<`Type`\>

***

### sort()

```ts
sort(): Collection<Type>;
```

Defined in: [collection.ts:146](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L146)

Sorts the items in the collection alphabetically

#### Returns

`Collection`\<`Type`\>

***

### sortBy()

```ts
sortBy(
   iterators: 
  | CollectionIterator
  | CollectionIterator[], 
   orders: string[] | "desc" | "asc", 
   natural: boolean): this;
```

Defined in: [collection.ts:153](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L153)

Sorts collection items according to requirements

#### Parameters

##### iterators

[`CollectionIterator`](../type-aliases/CollectionIterator.md) | [`CollectionIterator`](../type-aliases/CollectionIterator.md)[]

##### orders

`string`[] | `"desc"` | `"asc"`

##### natural

`boolean` = `true`

#### Returns

`this`

***

### toJSON()

```ts
toJSON(): string;
```

Defined in: [collection.ts:209](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L209)

Converts the collection into a JSON serialized string

#### Returns

`string`

***

### uniq()

```ts
uniq(): Collection<Type>;
```

Defined in: [collection.ts:92](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L92)

Creates a duplicate-free version of a collection

#### Returns

`Collection`\<`Type`\>

***

### uniqBy()

```ts
uniqBy(iterator: CollectionIterator): Collection<Type>;
```

Defined in: [collection.ts:99](https://github.com/freearhey/core-js/blob/8c0704a0850302bdab71f91382f3c72b852fcf07/src/collection.ts#L99)

Creates a duplicate-free version of a collection according to requirements

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Collection`\<`Type`\>
