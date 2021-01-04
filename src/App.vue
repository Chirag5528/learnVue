<template>
  <div class="wrapper">
    <div class="bg-white p-12 rounded-lg shodow hover:shadow-lg">
      <date-template></date-template>
      <hero-list :heroes='heroes' />
      <add-new-hero 
          ref='addNewHero' 
          :isUpdate=updateHero
          @updateHero="updateHeroMethod" 
          @addNewHero="addHero" />  
      <favourite-heroes :favHeroes="favHeroes" />     
    </div>  
  </div>
</template>


<script>
import AddNewHero from './components/AddNewHero'
import DateTemplate from './components/DateTemplate'
import HeroList from './components/HeroList'
import FavouriteHeroes from './components/FavouriteHeroes'

export default {
  name: 'App',
  components: {
   AddNewHero,
   DateTemplate,
   HeroList,
   FavouriteHeroes
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