import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:"/",
        name:"MainLayout",
        component: () => import("@/layouts/MainLayout.vue"),
        redirect: {name: "Home"},
        children:[
          {
            path:"/",
            name:"Home",
            component: () => import("@/views/main-page/index.vue")
          },
          {
            path:"/korzina",
            name:"Korzina",
            component: () => import("@/views/korzina/index.vue")
          },
        ]
    },
  ]
})

export default router
