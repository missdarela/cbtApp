import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
routes:[
    {
        path:"/",
        name: "landing",
        component: () => import('../views/landingPage.vue')
    
    },
    {
      path:"/login",
      name: "loginView",
      component: () => import('../views/loginView.vue')
  
  },
  {
    path:"/dashboard",
    name: "dashboardView",
    component: () => import('../views/dashboardView.vue')

}
]
})

export default router;