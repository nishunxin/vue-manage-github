import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Main',
        component:() => import('../views/Main.vue'),
        children: [
            // {
            //     path:'/home',
            //     name:'home',
            //     component:() => import('../views/home/Index.vue')  
            // },
            // {
            //     path:'/user',
            //     name:'user',
            //     component:() => import('../views/user/Index.vue') 
            // },
            // {
            //     path:'/mall',
            //     name:'mall',
            //     component:() => import('../views/mall/index.vue') 
            // },
            // {
            //     path:'/pageOne',
            //     name:'page1',
            //     component:() => import('../views/other/pageOne.vue') 
            // },
            // {
            //     path:'/pageTwo',
            //     name:'page2',
            //     component:() => import('../views/other/pageTwo.vue') 
            // }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/login/login.vue') 
    }
    
]

const router = new VueRouter({
    mode:'history',
    routes
})

//应产生冗余导航，路由报错添加。
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}





export default router