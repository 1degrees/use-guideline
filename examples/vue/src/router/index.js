import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/guideLine',
    children: [
      {
        name: 'guideLine',
        path: '/guideLine',
        component: () => import('@sandboxes/guideLine/src/app.vue')
      },
      {
        name: 'adsorb',
        path: '/adsorb',
        component: () => import('@sandboxes/adsorb/src/app.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // TODO: 在这里添加你的路由拦截逻辑
  // 例如：检查用户是否登录、权限验证等
  next()
})

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用
  next()
})

// 全局后置钩子
router.afterEach((to, from) => {
  // 导航完成后的回调
  // 不接受 next 函数，也不会改变导航本身
})

export default router
