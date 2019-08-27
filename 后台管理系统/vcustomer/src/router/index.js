import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Customers from '../components/Customers.vue'
import Add from '../components/Add.vue'
import CustomerDetails from '../components/CustomerDetails.vue'
import Edit from '../components/Edit.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'customers',
      component: Customers
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path:'/add',
      name:'add',
      component:Add
    },
    {
      path:'/customer/:id',
      name:'customersdetails',
      component:CustomerDetails
    },
    {
      path:'/edit/:id',
      name:'edit',
      component:Edit
    }
  ],
  mode:'history',
})
