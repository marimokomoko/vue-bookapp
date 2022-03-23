import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45696b2c = () => interopDefault(import('..\\pages\\book.vue' /* webpackChunkName: "pages/book" */))
const _76474250 = () => interopDefault(import('..\\pages\\book\\index.vue' /* webpackChunkName: "pages/book/index" */))
const _fb2354dc = () => interopDefault(import('..\\pages\\book\\search.vue' /* webpackChunkName: "pages/book/search" */))
const _01fa6314 = () => interopDefault(import('..\\pages\\book\\edit\\_id.vue' /* webpackChunkName: "pages/book/edit/_id" */))
const _527cc8c1 = () => interopDefault(import('..\\pages\\firebasetest\\addData.vue' /* webpackChunkName: "pages/firebasetest/addData" */))
const _43ba33ed = () => interopDefault(import('..\\pages\\firebasetest\\addData_ts.vue' /* webpackChunkName: "pages/firebasetest/addData_ts" */))
const _55784761 = () => interopDefault(import('..\\pages\\firebasetest\\showData.vue' /* webpackChunkName: "pages/firebasetest/showData" */))
const _25ec5621 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/book",
    component: _45696b2c,
    children: [{
      path: "",
      component: _76474250,
      name: "book"
    }, {
      path: "search",
      component: _fb2354dc,
      name: "book-search"
    }, {
      path: "edit/:id?",
      component: _01fa6314,
      name: "book-edit-id"
    }]
  }, {
    path: "/firebasetest/addData",
    component: _527cc8c1,
    name: "firebasetest-addData"
  }, {
    path: "/firebasetest/addData_ts",
    component: _43ba33ed,
    name: "firebasetest-addData_ts"
  }, {
    path: "/firebasetest/showData",
    component: _55784761,
    name: "firebasetest-showData"
  }, {
    path: "/",
    component: _25ec5621,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
