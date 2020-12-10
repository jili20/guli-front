import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr' // 轮播图插件
import VueQriously from 'vue-qriously' // 微信支付二维码插件
import ElementUI from 'element-ui' // element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'// element-ui的css
Vue.use(ElementUI) // 使用elementUI
Vue.use(VueQriously) // 使用微信支付二维码插件
Vue.use(VueAwesomeSwiper) // 使用轮播图插件
