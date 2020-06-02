import Vue from 'vue';
import VueRouter from 'vue-router';
import SignUpcomponent from '../components/SignUpComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeComponent,
  },
  {
    path: '/sign_up',
    name: 'sign_up',
    component: SignUpcomponent,
  },
];

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});

export default router;
