# Class: Template

Defined in: [template.ts:1](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/template.ts#L1)

## Constructors

### Constructor

```ts
new Template(template: string): Template;
```

Defined in: [template.ts:4](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/template.ts#L4)

#### Parameters

##### template

`string`

#### Returns

`Template`

## Methods

### format()

```ts
format(obj: {
[key: string]: string | number;
}): string;
```

Defined in: [template.ts:16](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/template.ts#L16)

Replaces variables in the template with values from the object with keys of the same name

#### Parameters

##### obj

#### Returns

`string`

***

### variables()

```ts
variables(): string[];
```

Defined in: [template.ts:9](https://github.com/freearhey/core-js/blob/c1073252bda2c3588ab21d4d1a9655ef612a6dd4/src/template.ts#L9)

Returns a list of all variables specified in the template

#### Returns

`string`[]
