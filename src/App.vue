<template>
    <div class="content">
        <navbar-template @loginButtonClicked="toggleModal"></navbar-template>
        <div class="wrapper">
          <router-view></router-view>
        </div>
        <LoginModal ref='modal' />
    </div>
</template>


<script>

import NavbarTemplate from './components/NavbarTemplate'
import LoginModal from './components/LoginModal'
export default {
  name: 'App',
  components: {
    NavbarTemplate,
    LoginModal
  },
  data:function(){
    return {}
  },
  methods:{
    toggleModal:function(){
      this.$refs['modal'].toggleModal();
    }
  },
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