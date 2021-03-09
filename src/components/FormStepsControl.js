import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormStepsControl',
  emits: ['click'],
  props: {
    type: {
      type: [String],
      required: true
    }
  },
  setup(props, context)
  {  
    const {
      type
    } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const steps$ = computed(() => {
      return form$.value.steps$
    })

    /**
     * 
     * 
     * @private
     */
    const current$ = computed(() => {
      return steps$.value ? steps$.value.current$ : undefined
    })

    /**
     * 
     * 
     * @private
     */
    const isLabelComponent = computed(() => {
      return label.value !== null && typeof label.value === 'object'
    })


    /**
     * 
     * 
     * @private
     */
    const visible = computed(() => {
      let buttons = current$ && current$.value ? current$.value.buttons : null

      switch (type.value) {
        case 'previous':
          return !buttons ? true : buttons.previous !== false

        case 'next':
          return steps$.value && !steps$.value.isAtLastStep && (!buttons || buttons.next !== false)

        case 'finish':
          return steps$.value && steps$.value.isAtLastStep
      }
    })

    /**
     * 
     * 
     * @private
     */
    const disabled = computed(() => {
      switch (type.value) {
        case 'previous':
          return steps$.value && steps$.value.isAtFirstStep

        case 'next':
          return current$.value !== undefined && current$.value.index !== undefined &&
            // only disable next because of invalidity
            // if element validations are triggered on
            // change, otherwise it might occur that the
            // step has invalid fields, which values have
            // changed to valid, but still marked as invalid
            (
              (current$.value.invalid && form$.value.shouldValidateOnChange) ||  
              current$.value.busy
            )

        case 'finish':
          // only disable finish because of invalidity
          // if element validations are triggered on
          // change, otherwise it might occur that the
          // form has invalid fields, which values have
          // changed to valid, but still marked as invalid
          return (steps$.value.invalid && form$.value.shouldValidateOnChange) ||
                steps$.value.busy || form$.value.submitting || form$.value.disabled
      }
    })

    /**
     * 
     * 
     * @private
     */
    const label = computed(() => {
      let labels = current$ && current$.value ? current$.value.buttons : null

      switch (type.value) {
        case 'previous':
          return labels && labels.previous ? labels.previous : form$.value.__('laraform.steps.previous')
        case 'next':
          return labels && labels.next ? labels.next : form$.value.__('laraform.steps.next')
        case 'finish':
          return labels && labels.finish ? labels.finish : form$.value.__('laraform.steps.finish')
      }
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const previous = () => {
      steps$.value.previous()
    }
    /**
     * 
     * 
     * @private
     */
    const next = async () => {
      if (form$.value.shouldValidateOnStep) {
        await current$.value.validate()
      }

      if (current$.value.invalid) {
        return
      }

      current$.value.complete()
      steps$.value.next()
    }

    /**
     * 
     * 
     * @private
     */
    const finish = async () => {
      steps$.value.fire('finish')

      steps$.value.complete()
      steps$.value.submit()
    }

    /**
     * 
     * 
     * @private
     */
    const handleClick = () => {
      switch (type.value) {
        case 'previous':
          previous()
          break
        case 'next':
          next()
          break
        case 'finish':
          finish()
          break
      }
    }

    return {
      form$,
      theme,
      steps$,
      classes,
      mainClass,
      components,
      visible,
      disabled,
      current$,
      label,
      isLabelComponent,
      previous,
      next,
      finish,
      handleClick,
    }
  },
}