import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/components/Layout.vue'
 
let routes= [
    {
        path: '/',
        name: 'home',
        //使用import可以路由懒加载，如果不使用，太多组件一起加载会造成白屏
        component: () => import('../views/Home/Home.vue')
    },
    //{
        //配置404页面
        //path: '/:catchAll(.*)',
        //name: '404',
        //component: () => import(''),
    //}
    {
      path: '/aaa',
      name: 'aaa',
      meta: {
        title: 'aaa'
      },
      component: Layout,
    }
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 