import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
const baseURL = 'http://52.38.36.4:9000';
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);