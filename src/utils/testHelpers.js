import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { Laraform } from './../index'
import installer from './../installer'
import bootstrap from './../themes/bootstrap'
import defaultTheme from './../themes/default'
import config from './../config'
import condition from './../plugins/condition/services/condition'
import validation from './../services/validation'
import en from './../locales/en'
import _ from 'lodash'
import axios from 'axios'
window._ = _

const themes = {
  bootstrap,
  default: defaultTheme,
}

const createLaraformInstaller = function(options = {}) {
  const theme = options.theme || config.theme
  
  let finalConfig = Object.assign({}, config, {
    theme: theme
  }, options.config || {})

  const LaraformInstaller = installer(finalConfig)

  LaraformInstaller.theme(theme, themes[theme])

  if (options.elements !== undefined) {
    LaraformInstaller.elements(options.elements)
  }

  if (options.components !== undefined) {
    LaraformInstaller.components(options.components)
  }

  if (options.themes !== undefined) {
    _.each(options.themes, (optionTheme, name) => {
      LaraformInstaller.theme(name, optionTheme)
    })
  }

  if (options.plugins !== undefined) {
    LaraformInstaller.plugins(options.plugins)
  }

  if (options.locales !== undefined) {
    _.each(options.locales, (locale, name) => {
      LaraformInstaller.locale(name, locale)
    })
  } else {
    LaraformInstaller.locale('en', en)
  }

  return {
    LaraformInstaller,
    config: finalConfig,
  }
}

const installLaraform = function(options = {}) {
  const { LaraformInstaller, config } = createLaraformInstaller(options)

  const LocalVue = createLocalVue()

  LocalVue.use(LaraformInstaller)
  
  return {
    LocalVue,
    config,
  }
}

const createForm = function(data, options = {}) {
  let { LocalVue, config } = installLaraform(options)

  let form = LocalVue.extend({
    mixins: [Laraform],
    data() {
      return data
    }
  })

  let mountOptions = {
    LocalVue,
    propsData: options.propsData || {},
    mocks: {
      $laraform: {
        config: config,
        plugins: config.plugins,
        services: {
          condition,
          validation,
          axios,
        },
        locales: options.locales || {
          en: en
        }
      }
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  return mount(form, mountOptions)
}

const testDynamics = (done, options, type) => {
  let LocalVue = createLocalVue()

  LocalVue.config.errorHandler = done

  let variables = type === 'wizard'
    ? {
        block: 'step',
        blocksSelector: 'FormWizard',
        blockSelector: 'FormWizardStep',
        controlSelectors: {
          previous: 'FormWizardPrevious',
          next: 'FormWizardNext',
          finish: 'FormWizardFinish',
        }
      }
    : {
        block: 'tab',
        blocksSelector: 'FormTabs',
        blockSelector: 'FormTab',
        controlSelectors: false
      }

  let existingElements = {}
  _.each(options.existingElements || {}, (name) => {
    existingElements[name] = {
      type: 'text',
      label: 'Text' + name.toUpperCase()
    }
  })

  let addedElements = {}
  _.each(options.addedElements || {}, (name) => {
    addedElements[name] = {
      type: 'text',
      label: 'Text' + name.toUpperCase()
    }
  })

  let existingSteps = {}
  _.each(options.existingSteps || {}, (step, name) => {
    existingSteps[name] = step
  })

  let addedSteps = {}
  _.each(options.addedSteps || {}, (step, name) => {
    addedSteps[name] = step
  })

  let existingTabs = {}
  _.each(options.existingTabs || {}, (step, name) => {
    existingTabs[name] = step
  })

  let addedTabs = {}
  _.each(options.addedTabs || {}, (step, name) => {
    addedTabs[name] = step
  })

  let steps = Object.assign({}, existingSteps, addedSteps)
  let tabs = Object.assign({}, existingTabs, addedTabs)
  let blocks = !_.isEmpty(steps) ? steps : tabs

  let collectElements = () => {
    let elements = []
    let all = _.concat(options.existingElements || [], options.addedElements || [])

    _.each(blocks, (block) => {
      _.each(block.elements, (element) => {
        elements.push(element)
      })
    })

    _.each(all, (element) => {
      if (elements.indexOf(element) === -1) {
        elements.push(element)
      }
    })

    return elements
  }

  let elementShouldBeVisible = (elementName, blockName) => {
    return blocks[blockName].elements.indexOf(elementName) !== -1
  }

  let isAtFirstBlock = (form) => {
    let first = _.keys(variables.block)[0]
    let current = form.findComponent({ name: variables.blocksSelector }).vm.current$.name

    return first === current
  }

  let currentBlock = () => {
    return options[variables.block] || _.keys(blocks)[0]
  }

  let form = createForm({
    schema: existingElements,
    wizard: existingSteps,
    tabs: existingTabs,
  })

  if (!_.isEmpty(addedElements)) {
    form.setData({
      schema: addedElements
    })
  }

  LocalVue.nextTick(() => {
    if (!_.isEmpty(addedSteps)) {
      form.setData({
        wizard: addedSteps
      })
    }

    if (!_.isEmpty(addedTabs)) {
      form.setData({
        tabs: addedTabs
      })
    }

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      if (options[variables.block]) {
        form.findComponent({ name: variables.blocksSelector }).vm.goTo(options[variables.block])
      }

      let i = 0
      _.each(blocks, (block) => {
        let blockComponent = form.findAllComponents({ name: variables.blockSelector }).at(i)

        expect(blockComponent.exists()).toBe(true)
        expect(blockComponent.html()).toContain(block.label)

        if (block.name === currentBlock()) {
          expect(blockComponent.vm.active).toBe(true)
        }
        i++
      })

      _.each(collectElements(), (name, index) => {
        let e = form.findAllComponents({ name: 'TextElement' }).at(index)

        expect(e.exists()).toBe(true)
        expect(e.vm.name).toBe(name)

        LocalVue.nextTick(() => {
          expect(e.vm.visible).toBe(elementShouldBeVisible(name, currentBlock()))
        })
      })

      LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          if (variables.controlSelectors) {
            expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.visible).toBe(true)

            if (_.keys(steps).length == 1) {
              expect(form.findComponent({ name: variables.controlSelectors.next }).vm.visible).toBe(false)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.visible).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.disabled).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.disabled).toBe(false)
            } else if (_.keys(steps).length > 1 && isAtFirstBlock(form)) {
              expect(form.findComponent({ name: variables.controlSelectors.next }).vm.visible).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.visible).toBe(false)
              expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.disabled).toBe(true)
            }
          }

          done()
        })
      })
    })
    })
  })
}


export {
  installLaraform,
  createForm,
  createLaraformInstaller,
  testDynamics,
}


// const { LocalVue, config } = installLaraform()

// let formComponent = LocalVue.extend({
//   mixins: [Laraform],
//   data() {
//     return {
//       schema: {
//         name: {
//           type: 'text'
//         }
//       }
//     }
//   }
// })

// let form = mount(formComponent, {
//   LocalVue,
//   mocks: {
//     $laraform: {
//       config: config
//     }
//   }
// })

// let name = form.findComponent({ name: 'TextElement' })

// expect(name.vm.available).toBe(false)




// const LocalVue = createLocalVue()

// const { LaraformInstaller, config } = createLaraformInstaller()

// let availableMock = jest.fn(() => {
//   return false
// })

// defaultTheme.elements.TextElement.mixins[0].mixins[0].computed.available = availableMock

// LaraformInstaller.theme('default', defaultTheme)

// LocalVue.use(LaraformInstaller)

// let formComponent = LocalVue.extend({
//   mixins: [Laraform],
//   data() {
//     return {
//       schema: {
//         name: {
//           type: 'text'
//         }
//       }
//     }
//   }
// })

// let form = mount(formComponent, {
//   LocalVue,
//   mocks: {
//     $laraform: {
//       config: config
//     }
//   }
// })

// let name = form.findComponent({ name: 'TextElement' })

// expect(name.vm.available).toBe(false)