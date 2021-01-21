<template>
    <div class="content">
        <navbar-template></navbar-template>
        <div class="wrapper">
          <router-view></router-view>
        </div>
    </div>
</template>


<script>

import NavbarTemplate from './components/NavbarTemplate'
export default {
  name: 'App',
  components: {
    NavbarTemplate,
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