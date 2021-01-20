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
        component: /*webpackChunkName: Heroes*/ import("@/components/DcHeroes/DcHeroes")
    },
    {
        path:"/calendar",
        name:"calendar",
        component: /*webpackChunkName: Calendar*/ import("@/components/CalendarTemplate")
    },
    {
        path:"/markdown",
        name:"markdown",
        component: /*webpackChunkName: Markdown*/ import("@/components/MarkDownTemplate")
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    base:'/'
})
export default router;