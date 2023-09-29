import { useUserStore } from '@/stores'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path:'/login',
    name:'login',
    component:()=>import('../views/msal/Login.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component:()=>import('../views/msal/Logout.vue')
  }
]

const mainRoutes:Array<RouteRecordRaw> = [
  {
    path:'',
    component:()=>import('./main-routes.vue'),
    children:[
      {
        path:'/date',
        name:'date',
        component:()=>import('../views/date/Date.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: mainRoutes.concat(routes)

})

router.beforeEach(async(to)=>{
  const userStore = useUserStore()

  if(!userStore.isAuthenticated && (to.name !=='login' && to.name !=='logout')){
    return{name:'login'}
  }
})

export default router
