<template>
    <div class="grid grid-cols-2 bg-indigo-600 text-white font-nunito px-4 py-4">
        <div class="nav-title">
            <h2 class="text-3xl">Navbar</h2>
        </div>
        <div class="nav-lists">
            <ul class="nav-links grid auto-cols-auto grid-flow-col" >
                <li class="nav-items text-xl" v-for="(route,index) in routes" :key="index">
                    <router-link :to="{ name:route.name, }" >{{route.name.toUpperCase()}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {routes} from '@/Router.js'
    export default{
        name: "NavbarTemplate",
        data:function(){
            return{
                routes:[]
            }
        },
        created(){
            this.routes = routes
        }
    }
</script>