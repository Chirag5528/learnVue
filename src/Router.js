import { createRouter, createWebHistory } from 'vue-router'
import HomeTemplate from '@/components/HomeTemplate'
const routes = [
    {
        path:"/",
        name:"home",
        component: HomeTemplate
    },
    {
        path:"/heroes",
        name:"heroes",
        component: /*webpackChunkName: Heroes*/ import("@/components/DcHeroes/DcHeroes")
    },
    {
        path:"/calendar",
        name:"calendar",
        component: /*webpackChunkName: Calendar*/ import("@/components/CalendarTemplate")
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    base:'/'
})
export default router;