<template>
    <calendar-template></calendar-template>
</template>


<script>

import CalendarTemplate from './components/CalendarTemplate'
export default {
  name: 'App',
  components: {
    CalendarTemplate
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