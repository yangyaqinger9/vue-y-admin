import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/components/Layout.vue'
 
let routes= [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('../views/Home/Home.vue')
    // },
    //{
        //配置404页面
        //path: '/:catchAll(.*)',
        //name: '404',
        //component: () => import(''),
    //}
    {
      path: '/',
      name: 'aaa',
      meta: {
        title: 'aaa'
      },
      component: Layout,
      children: [
        {
            path: '/bbb',
            name: 'bbb',
            meta: {
              title: 'bbb'
            },
            component: () => import('@/views/Home/Home.vue')
        }
      ]
    }
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 