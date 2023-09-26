import { StringTemplate } from '../src'

describe('stringTemplate', () => {
  it('can return list of variables', () => {
    const template = new StringTemplate('Hello {name}, you have {count} unread messages')

    expect(template.variables()).toEqual(['name', 'count'])
  })

  it('can format template', () => {
    const template = new StringTemplate('Hello {name}, you have {count} unread messages')

    expect(template.format({ name: 'Bob', count: 10 })).toEqual(
      'Hello Bob, you have 10 unread messages'
    )
  })
})
