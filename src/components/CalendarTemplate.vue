<template>
  <div class="wrapper px-40 py-36">
      <div class="card">
        <div class="card-head">
          <h3>Calendar App</h3>
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
    return {}
  },
  methods:{},
  computed:{
      days:function(){
          return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
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