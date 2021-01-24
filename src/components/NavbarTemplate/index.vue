<template>
    <div class="grid grid-cols-2 bg-indigo-600 text-white font-nunito px-4 py-4">
        <div class="nav-title">
            <h2 class="text-3xl">Navbar</h2>
        </div>
        <div class="nav-lists">
            <ul class="nav-links grid auto-cols-auto items-center grid-flow-col" >
                <li class="nav-items text-xl" v-for="(route,index) in routes" :key="index">
                    <router-link :to="{ name:route.name, }" >{{route.name.toUpperCase()}}</router-link>
                </li>
                <li class="nav-items text-xl cursor-pointer" @click="$emit('loginButtonClicked')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
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