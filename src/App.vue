<template>
  <div>
    <h2>{{ days }}</h2>
  </div>
</template>


<script>
// import DcHeroes from "@/components/DcHeroes/DcHeroes";
export default {
  name: 'App',
  components: {
    // DcHeroes
  },
  data(){
    return{

    }
  },
  methods:{
  },
  computed:{
    days:function(){
      const days = [];
      let i =0;
      const d = new Date();
      for( i = 0; i < 7; i++ ){
        days.push( new Date(d.getFullYear(),d.getMonth(), d.getDate() + i ).toLocaleString( 'default', { weekday: 'short' } )  )
      }
      return days
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
.rm-2{
  margin-right:2em;
}
.bm-2{
  margin-bottom:2em;
}
</style>