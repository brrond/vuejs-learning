import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Forms from './views/Forms.vue';
import Tables from './views/Tables.vue';
import UIElements from './views/UIElements.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/:catch',
    name: 'Undefined',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
