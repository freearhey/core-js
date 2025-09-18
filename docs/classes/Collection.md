# Class: Collection\<Type\>

Defined in: [collection.ts:7](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L7)

## Type Parameters

### Type

`Type`

## Constructors

### Constructor

```ts
new Collection<Type>(items?: Type[]): Collection<Type>;
```

Defined in: [collection.ts:10](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L10)

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

Defined in: [collection.ts:38](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L38)

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

Defined in: [collection.ts:196](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L196)

Returns the underlying array represented by the collection

#### Returns

`Type`[]

***

### clone()

```ts
clone(): Collection<Type>;
```

Defined in: [collection.ts:189](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L189)

Creates a shallow copy of collection

#### Returns

`Collection`\<`Type`\>

***

### concat()

```ts
concat(collection: Collection<Type>): this;
```

Defined in: [collection.ts:121](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L121)

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

Defined in: [collection.ts:71](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L71)

Returns the number of items in the collection

#### Returns

`number`

***

### filter()

```ts
filter(iterator: CollectionIterator): Collection<Type>;
```

Defined in: [collection.ts:100](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L100)

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

Defined in: [collection.ts:33](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L33)

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

Defined in: [collection.ts:15](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L15)

Gets the first element of collection

#### Parameters

##### iterator?

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Type`

***

### forEach()

```ts
forEach(callback: (item: Type, index?: number) => void): this;
```

Defined in: [collection.ts:107](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L107)

Iterates over elements of collection and invokes callback for each element

#### Parameters

##### callback

(`item`: `Type`, `index?`: `number`) => `void`

#### Returns

`this`

***

### groupBy()

```ts
groupBy(iterator: CollectionIterator): Dictionary<Type[]>;
```

Defined in: [collection.ts:175](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L175)

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

Defined in: [collection.ts:158](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L158)

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

Defined in: [collection.ts:81](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L81)

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

Defined in: [collection.ts:50](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L50)

Returns a new collection with all unique elements that are in both collections

#### Parameters

##### collection

`Collection`\<`Type`\>

#### Returns

`Collection`\<`Type`\>

***

### intersectsBy()

```ts
intersectsBy(collection: Collection<Type>, iterator: CollectionIterator): Collection<Type>;
```

Defined in: [collection.ts:57](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L57)

Returns a new collection with all unique elements that are in both collections, taking into account the specified requirements

#### Parameters

##### collection

`Collection`\<`Type`\>

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Collection`\<`Type`\>

***

### isEmpty()

```ts
isEmpty(): boolean;
```

Defined in: [collection.ts:128](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L128)

Returns `true` if the collection is empty

#### Returns

`boolean`

***

### isNotEmpty()

```ts
isNotEmpty(): boolean;
```

Defined in: [collection.ts:133](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L133)

Returns `true` if the collection is not empty

#### Returns

`boolean`

***

### join()

```ts
join(separator: string): string;
```

Defined in: [collection.ts:76](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L76)

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

Defined in: [collection.ts:168](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L168)

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

Defined in: [collection.ts:24](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L24)

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

Defined in: [collection.ts:182](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L182)

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

Defined in: [collection.ts:163](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L163)

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

Defined in: [collection.ts:114](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L114)

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

Defined in: [collection.ts:45](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L45)

Gets a random element from collection

#### Returns

`Type`

***

### slice()

```ts
slice(start?: number, end?: number): Collection<Type>;
```

Defined in: [collection.ts:64](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L64)

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

Defined in: [collection.ts:138](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L138)

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

Defined in: [collection.ts:145](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L145)

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

Defined in: [collection.ts:201](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L201)

Converts the collection into a JSON serialized string

#### Returns

`string`

***

### uniq()

```ts
uniq(): Collection<Type>;
```

Defined in: [collection.ts:86](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L86)

Creates a duplicate-free version of a collection

#### Returns

`Collection`\<`Type`\>

***

### uniqBy()

```ts
uniqBy(iterator: CollectionIterator): Collection<Type>;
```

Defined in: [collection.ts:93](https://github.com/freearhey/core-js/blob/b05435e0fc0ce15b21de1f38a8f254420e819c83/src/collection.ts#L93)

Creates a duplicate-free version of a collection according to requirements

#### Parameters

##### iterator

[`CollectionIterator`](../type-aliases/CollectionIterator.md)

#### Returns

`Collection`\<`Type`\>
