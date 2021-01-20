import { createRouter, createWebHistory } from 'vue-router'
import HomeTemplate from '@/components/HomeTemplate'
import DcHeroes from "@/components/DcHeroes/DcHeroes"
import CalendarTemplate from "@/components/CalendarTemplate"
import MarkDownTemplate from "@/components/MarkDownTemplate"
export const routes = [
    {
        path:"/",
        name:"home",
        component: HomeTemplate
    },
    {
        path:"/heroes",
        name:"heroes",
        component: DcHeroes
    },
    {
        path:"/calendar",
        name:"calendar",
        component: CalendarTemplate
    },
    {
        path:"/markdown",
        name:"markdown",
        component: MarkDownTemplate
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    base:'/'
})
export default router;