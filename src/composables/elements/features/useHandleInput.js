export default function useHandleInput(props, context, dependencies)
{

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const model = dependencies.model
  const currentValue = dependencies.currentValue
  const previousValue = dependencies.previousValue
  const changed = dependencies.changed
  const dirt = dependencies.dirt
  const validate = dependencies.validate
  const fire = dependencies.fire


  // =============== METHODS ==============

  /**
   * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed.
   *
   * @public
   */
  const handleInput = (e) => {
    model.value = e.target.value

    if (changed.value) {
      dirt()
      fire('change', currentValue.value, previousValue.value)
    }

    if (form$.value.shouldValidateOnChange) {
      validate()
    }
  }

  return {
    handleInput,
  }
}