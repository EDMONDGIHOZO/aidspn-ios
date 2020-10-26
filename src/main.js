import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import moment from 'moment'
import Vue2Filters from 'vue2-filters'

///import scss files
import './assets/styles/main.scss'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(Vue2Filters)

//filters
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment.unix(value).format('MMM Do YYYY')
    }
})

Vue.filter('str_limit', function(value, size) {
    if (!value) return ''
    value = value.toString()

    if (value.length <= size) {
        return value
    }
    return value.substr(0, size) + '...'
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')