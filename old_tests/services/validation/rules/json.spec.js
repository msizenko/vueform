import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change } from './.test-helpers'

describe('JSON Rule', () => {
  it('should validate JSON', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'json'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    change(a, '{"a":"aaa"}')
    expect(a.vm.invalid).toBe(false)

    change(a, '{a:"aaa"}')
    expect(a.vm.invalid).toBe(true)

    done()
  })
})