<template>
  <div class="wrapper px-40 py-36">
      <div class="card">
        <div class="card-head">
          <h3>Calendar App</h3>
        </div>
        <div class="calendar-top mt-4 grid grid-cols-2 justify-evenly">
          <h4 class="text-3xl" v-text="thisMonth" ></h4>
          <h4 class="text-3xl text-right" v-text="thisYear" ></h4>
        </div>
        <div class="days">
            <ul>
                <li v-for="(day,index) in days" class="text-2xl" :key='index' v-text="day"></li>
            </ul>
        </div>
        <div class="numberDays">
          <ul >
              <li v-for="x in 30" class="text-2xl w-full" v-text="x" :key="x"></li>
            </ul>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'CalendarTemplate',
  components: {},
  data:function(){
    return {
      
    }
  },
  methods:{},
  computed:{
      days:function(){
          let i = 0;
          const d = new Date();
          const days = [];
          
          for( i=0; i<7;i++ ){ 
              console.log( d.getFullYear(),d.getMonth(), i )
              days.push( new Date( d.getFullYear(),d.getMonth(), i + 1 ).toLocaleString('default', {'weekday':'short'}) )
          }
          return days;
      },
      thisMonth:function(){
        return new Date().toLocaleString('default',{ 'month':'long' })
      },
      thisYear:function(){
        return new Date().getFullYear()
      }
  }
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