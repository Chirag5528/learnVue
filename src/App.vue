<template>
  <div class="wrapper">
    <div class="bg-white p-12 rounded-lg shodow hover:shadow-lg">
      <date-template></date-template>
    <ul class="my-6">
      <li v-for="(hero,index) in heroes" :key='index' class='bm-2 grid grid-cols-4 gap-5'>
        <span v-text="hero.name" class="text-xl text-gray-600"></span>
        <button class="btn-indigo" @click="setFavHero(hero.name)">Set Fav</button>
        <button class="btn-warning" @click="editHero(hero.name,index)">Edit Me</button>
        <button class="btn-danger" @click="deleteHero(hero.name)">Delete Me</button>
      </li>
    </ul>
    <add-new-hero 
        ref='addNewHero' 
        :isUpdate=updateHero
        @updateHero="updateHeroMethod" 
        @addNewHero="addHero" />
    
    <div class="mt-8" v-if="favHeroes.length > 0">
      <h2 class='text-2xl text-gray-800'>Favourite Heroes</h2>
      <div class="pl-10 mt-3">
        <ol class="list-decimal">
          <li 
            class='mt-2 text-indigo-600 text-xl'
            v-for='(hero,index) in favHeroes' 
            :key='index' 
            v-text="hero.name">
          </li>
        </ol>
      </div>
    </div>
  </div>  
  </div>
    
</template>


<script>
import AddNewHero from './components/AddNewHero'
import DateTemplate from './components/DateTemplate'
export default {
  name: 'App',
  components: {
   AddNewHero,
   DateTemplate

  },
  data:function(){
    return {
      updateHero:false,
      favHeroes: [],
      heroes:[
        {
          name:'Super Man'
        },
        {
          name:'Bat Man'
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