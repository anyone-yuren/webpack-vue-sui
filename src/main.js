require("./assets/css/index.css")
var Vue = require('vue')
var App = require('./app.vue')
var vueResource = require('vue-resource')
var VueRouter = require('vue-router')
//var routerConfig = require('./router.js') 
import routerConfig from './router.js'
Vue.use(VueRouter)
Vue.use(vueResource) 
 
const router = new VueRouter()

routerConfig(router) 
router.start(App, 'body') 
window.router = router 