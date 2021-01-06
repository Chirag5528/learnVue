<template>
  <div class="wrapper px-40 py-36">
      <div class="card">
        <div class="card-head text-blue-400">
          <h3>Calendar App</h3>
        </div>
        <div class="monthRow">
            <h3 class="text-4xl text-blue-400">{{ month }}</h3>
            <h3 class="text-4xl text-right text-blue-400">{{ year }}</h3>
        </div>
        <div class="days">
            <ul>
                <li v-for="(day,index) in days" class="text-2xl" :key='index' v-text="day"></li>
            </ul>
        </div>
        <div class="numberDays">
          <ul>
              <li v-for="x in startIndex" :key="x"></li>
              <li v-for="x in daysInMonth" class="text-2xl w-full" :key="x">
                <span :class="[ ( today(x) ? 'activeDay'  : '' )]" >{{ x }}</span>
              </li>
            </ul>
        </div>
        <div class="switchIcons">
            <h5 class="text-md" @click="prevMonth">
              <svg xmlns="http://www.w3.org/2000/svg" class="svg border border-transparent transition-all duration-200  text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </h5>
            <h5 class="text-md text-right" @click="nextMonth">
              <svg xmlns="http://www.w3.org/2000/svg" class="svg border border-transparent transition-all duration-200 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </h5>
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
      index:0,
      date:new Date()
    }
  },
  methods:{
    nextMonth:function(){
      this.index++
    },
    prevMonth:function(){
      this.index--
    },
    today:function(x){
        return new Date( this.date.getFullYear(), this.index, x ).toDateString() == new Date().toDateString()
    }
  },
  computed:{
      days:function(){
          return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
      },
      month:function(){
          return new Date( this.date.getFullYear(),this.index, this.date.getDate() ).toLocaleString( "defualt", { 'month' : 'long' } )
      },
      year:function(){
        return new Date( this.date.getFullYear(), this.index ).getFullYear()
      },
      daysInMonth:function(){
        return new Date( this.date.getFullYear(),this.index + 1,0 ).getDate()
      },
      startIndex:function(){
        const day = new Date( this.date.getFullYear(), this.index, 1 ).toLocaleString( "default", { 'weekday':'short' } )
        return this.days.indexOf( day )
      }
  },
  created(){
    this.setMonth
  }
}
</script>

<style></style>