import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/views/index.vue"),
      children: ([
        {
          path: "",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/home",
          component: () => import("@/views/home/home.vue")
        },
        {
          path: "/quotes",
          component: () => import("@/views/quotes/quotes.vue")
        },
        {
          path: "/contract",
          component: () => import("@/views/contract/contract.vue")
        },
        {
          path: "/fiat",
          component: () => import("@/views/fiat/fiat.vue")
        },
        {
          path: "/mine",
          component: () => import("@/views/mine/mine.vue")
        }
      ])

    }
  ]
})

export default router
