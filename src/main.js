// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('./app.css')

import '@fontsource/lato'
import '@fontsource/ubuntu'

import DefaultLayout from '~/layouts/Default.vue'
import mitt from 'mitt'

export default function (Vue, { router, head, isClient }) {
    Vue.prototype.$mitt = mitt()
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
