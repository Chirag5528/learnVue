<template>
    <div class="wrapper md:px-40 sm:p-10">
        <navbar-template></navbar-template>

        <router-view></router-view>

        <!-- <calendar-template></calendar-template> -->
    </div>
</template>


<script>

import NavbarTemplate from './components/NavbarTemplate'
// import CalendarTemplate from './components/CalendarTemplate'
export default {
  name: 'App',
  components: {
    NavbarTemplate,
    // CalendarTemplate
  },
  data:function(){
    return {}
  },
  methods:{},
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .rm-2{
    margin-right:2em;
  }
  .bm-2{
    margin-bottom:2em;
  }
</style>