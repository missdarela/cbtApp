import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("../views/landingPage.vue"),
    },
    {
      path: "/login",
      name: "loginView",
      component: () => import("../views/loginView.vue"),
    },

    {
      path: "/dashboard",
      name: "dashboardView",
      meta: { requiresAuth: true },
      component: () => import("../layouts/dashboardView.vue"),
      children: [
        {
          path: "",
          name: "dashboardIndex",
          component: () => import("../components/dashboardIndex.vue"),
        },
        {
          path: "profile",
          name: "Profile",
          component: () => import("../views/dashboardProfile.vue"),
        },
        {
          path: "/dashboard/take-exam",
          name: "TakeExam",
          component: () => import("../views/dashboardExam.vue"),

          children: [
            {
              path: "",
              name: "TakeExams",
              component: () => import("../components/takeExamIndex.vue"),
            },
            {
              path: "arts",
              name: "Arts",
              component: () => import("../components/artSubjects.vue"),
            },
            {
              path: "science",
              name: "Science",
              component: () => import("../components/scienceSubjects.vue"),
            },
            {
              path:"commerce",
              name:"Commerce",
              component:()=> import("../components/commercialSubjects.vue")
            },
          ],
        },
        {
          path: "results",
          name: "results",
          component: () => import("../views/dashboardResults.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const authStore = useAuthStore();

    // Wait until the auth store is done loading
    if (authStore.loading) {
      await new Promise((resolve) => {
        const unwatch = authStore.$subscribe((mutation, state) => {
          if (!state.loading) {
            unwatch();
            resolve();
          }
        });
      });
    }
    
    // Now check the user state
    if (!authStore.user) {
      next({ name: "loginView" });
    } else {
      next();
    }
  } else {
    next();
  }
});



export default router;