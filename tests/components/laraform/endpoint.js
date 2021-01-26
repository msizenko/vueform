import { createForm } from 'test-helpers'

export default function (data, options, name) {
  it(`should set endpoint with ${name}`, async () => {
    let form = createForm(data, options || {})

    expect(form.vm.endpoint).toBe('/my/process')

    form.vm.endpoint = '/not/my/process'

    expect(form.vm.endpoint).toBe('/not/my/process')
  })
}