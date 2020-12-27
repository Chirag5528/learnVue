<template>
  <div class="bg-gray-200 flex flex-col items-center justify-center h-screen">
    <div class="bg-white p-12 rounded-lg shodow hover:shadow-lg">
      <div class="dateToday flex flex-row w-full">
        <div class="fullDate w-1/2">
          <div class="flex">
            <div>
              <h4 class='text-gray-800' v-text="dateToday.day"></h4>
            </div>
            <div>
              <h6 class='' v-text="dateToday.month"></h6>
              <h6 class='' v-text="dateToday.year"></h6>
            </div>
          </div>
        </div>
        <div class="day w-1/2 text-right">
          <h4 class="dayName" v-text="dateToday.dayName"></h4>
        </div>
      </div>
    <ul>
      <li v-for="(hero,index) in heroes" :key='index' class='bm-2'>
        <span v-text="hero.name" class="rm-2"></span>
        <button class="rm-2 btn-success hover:text-white hover:bg-green-500" @click="setFavHero(hero.name)">Set Fav</button>
        <button class="rm-2 btn-warning hover:text-white hover:bg-yellow-500" @click="editHero(hero.name, index)">Edit Me</button>
        <button class="btn-danger hover:text-white hover:bg-red-500" @click="deleteHero(hero.name)">Delete Me</button>
      </li>
    </ul>
    <add-new-hero ref='addNewHero' hero='heroes' isUpdate='updateHero' @updateHero=updateHeroMethod @addNewHero="addHero" ></add-new-hero>
    <div class="mt-8" v-if="favHeroes.length > 0">
      <h2>Favourite Heroes</h2>
      <ol>
        <li class='bm-2' v-for='(hero,index) in favHeroes' :key='index' v-text="hero.name"></li>
      </ol>
    </div>
  </div>  
  </div>
    
</template>


<script>
import AddNewHero from './components/AddNewHero'
export default {
  name: 'App',
  components: {
   AddNewHero,

  },
  data:function(){
    return {
      dateToday:{
        day: new Date().getDate(),
        dayName:new Date().toLocaleString('default', { weekday: 'long' }),
        month:new Date().toLocaleString('default', { month: 'short' }),
        year:new Date().getFullYear()
      },
      updateHero:false,
      
      favHeroes: [],
      heroes:[
        {
          name:'Superman'
        },
        {
          name:'Batman'
        },
        {
          name:'Iron Man'
        },
        {
          name:'Spider Man'
        },
        {
          name:'Angry Man'
        }
      ],
      isDisabled:false,
    }
  },
  methods:{
    editHero(heroName,index){
      this.updateHero = true
      this.heroToUpdate = index
      this.$refs['addNewHero'].$refs['heroInput'].value = heroName
    },
    addHero:function(name){
      this.heroes.push( { name:name } )
    },
    updateHeroMethod:function(heroToUpdate,heroValue){
      this.heroes[heroToUpdate].name = heroValue
    }, 
    deleteHero(heroName){
     this.heroes = this.heroes.filter( (hero) => hero.name != heroName ) 
    },
    setFavHero(name){
      this.favHeroes.push( { name:name } );
    },
  }
}
</script>

<style>
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