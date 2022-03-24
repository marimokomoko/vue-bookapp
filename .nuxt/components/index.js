export const AtomsButtonItem = () => import('../..\\components\\atoms\\ButtonItem.vue' /* webpackChunkName: "components/atoms-button-item" */).then(c => wrapFunctional(c.default || c))
export const AtomsFooter = () => import('../..\\components\\atoms\\Footer.vue' /* webpackChunkName: "components/atoms-footer" */).then(c => wrapFunctional(c.default || c))
export const AtomsHeader = () => import('../..\\components\\atoms\\Header.vue' /* webpackChunkName: "components/atoms-header" */).then(c => wrapFunctional(c.default || c))
export const AtomsTitleItem = () => import('../..\\components\\atoms\\TitleItem.vue' /* webpackChunkName: "components/atoms-title-item" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
