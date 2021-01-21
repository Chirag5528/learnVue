import { createRouter, createWebHistory } from 'vue-router'
import HomeTemplate from '@/components/HomeTemplate'

export const routes = [
    {
        path:"/",
        name:"home",
        component: HomeTemplate
    },
    {
        path:"/heroes",
        name:"heroes",
        component: /*webpackChunkName: DcHeroes*/ import("@/components/DcHeroes/DcHeroes")
    },
    {
        path:"/calendar",
        name:"calendar",
        component: /*webpackChunkName: CalendarTemplate*/ import("@/components/CalendarTemplate")
    },
    {
        path:"/markdown",
        name:"markdown",
        component: /*webpackChunkName: MarkDownTemplate*/ import("@/components/MarkDownTemplate")
    },
]
const router = createRouter({
    history:createWebHistory(),
    base:'/',
    routes,
})
export default router;