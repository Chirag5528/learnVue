<template>
    <div>
        <h2>Navbar</h2>
        <router-link :to="{ name:'home', }">Home</router-link>
        <router-link :to="{ name:'heroes', }">Heroes</router-link>
        <router-link :to="{ name:'calendar', }">Calendar</router-link>
    </div>
</template>
<script>
    export default{
        name: "NavbarTemplate",
    }
</script>