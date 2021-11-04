import installer from './partials/installer'
import config from './partials/config'
import components from './partials/components'
import useVueform from './partials/useVueform'
import Vueform from './partials/Vueform'

console.log(components)

export default installer(config, components)

export {
  Vueform,
  useVueform,
} 