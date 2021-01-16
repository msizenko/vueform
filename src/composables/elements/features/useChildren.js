import { computed, toRefs, ref, watch } from 'composition-api'
import states from './../../../utils/states'
import countries from './../../../utils/countries'
import normalize from './../../../utils/normalize'

const list = function(props, context, dependencies)
{
  // ================ DATA ================
  
  const instances = ref([])

  const children$Array = ref([])
      
  // ============== COMPUTED ==============

  const children$ = computed(() => {
    let children$ = {}

    children$Array.value.forEach((e$) => {
      children$[e$.name] = e$
    })

    return children$
  })

  // =============== METHODS ==============

  return {
    // Data
    instances,
    children$Array,

    // Computed
    children$,
  }
}

const object = function(props, context, dependencies, options = {})
{
  const { schema } = toRefs(props)
  const schemaName = options.schemaName || 'schema'

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ===============

  const children$Array = ref([])

  const children$ = computed(() => {
    let children$ = {}

    children$Array.value.forEach((e$) => {
      children$[e$.name] = e$
    })

    return children$
  })

  // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed({
    get() {
      return schema.value[schemaName]
    },
    set(val) {
      form$.value.$set(schema.value, schemaName, val)
    }
  })

  // Resort children$Array when children
  // order changes or a child is removed
  watch(children, (newValue) => {
    let newChildren$Array = []

    _.each(newValue, (child, name) => {
      newChildren$Array.push(children$Array.value[children$Array.value.map(e$=>normalize(e$.name)).indexOf(normalize(name))])
    })

    children$Array.value = newChildren$Array
  }, { flush: 'post' })

  return {
    // Data
    children,
    children$Array,

    // Computed
    children$,
  }
}

const address = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled
  const readonly = dependencies.readonly
  const required = dependencies.required
  const path = dependencies.path

  const { children$Array, children$ } = object(props, context, dependencies)

  // ============== COMPUTED ==============

  const addressId = ref(`address-${Math.floor(Math.random() * 100000000)}`)

  /**
   * Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.
   * 
   * @type {object} 
   * @default {...}
   */
  const fields = computed(() => {
    let fields = {
      address: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.addressLabel'),
        id: addressId.value,
        disabled: disabled.value,
        readonly: readonly.value,
      },
      address2: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.address2Label'),
        disabled: disabled.value,
        readonly: readonly.value,
      },
      zip: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.zipLabel'),
        disabled: disabled.value,
        readonly: readonly.value,
      },
      city: {
        type: 'text',
        label: form$.value.__('laraform.elements.address.cityLabel'),
        disabled: disabled.value,
        readonly: readonly.value,
      },
      state: {
        type: 'select',
        label: form$.value.__('laraform.elements.address.stateLabel'),
        items: states,
        conditions: [[path.value + '.country', ['us', 'US']]],
        disabled: disabled.value,
        readonly: readonly.value,
      },
      country: {
        type: 'select',
        label: form$.value.__('laraform.elements.address.countryLabel'),
        items: countries,
        disabled: disabled.value,
        readonly: readonly.value,
      },
    }

    if (required.value) {
      fields.address.rules = 'required'
      fields.zip.rules = 'required'
      fields.city.rules = 'required'
      fields.state.rules = 'required'
      fields.country.rules = 'required'
    }

    return fields
  })

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed(() => {
    return fields.value
  })

  return {
    children$Array,
    children$,
    children,
    fields,
    addressId,
  }
}

const buttons = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { children$Array, children$, children } = object(props, context, dependencies, {
    schemaName: 'buttons'
  })

  return {
    children$Array,
    children$,
    children,
  }
}

const group = object

export {
  group,
  list,
  object,
  address,
  buttons,
}