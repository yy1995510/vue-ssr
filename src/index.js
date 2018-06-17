import Vue from 'vue'
import index from './index.vue'
var root = document.createElement('div')
root.id="root"
document.body.appendChild(root)
new Vue({
    render: h=>h(index)
}).$mount(root)