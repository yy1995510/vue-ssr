import Vue from 'vue'
import index from './index.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'
import './test.styl'
import './index.css'

Vue.use(Vuetify)
var root = document.createElement('div')
root.id="root"
document.body.appendChild(root)
new Vue({
    render: h=>h(index)
}).$mount(root)