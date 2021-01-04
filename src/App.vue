<template>
  <div class="wrapper">
<<<<<<< HEAD
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
=======
      <div class="bg-white p-12 rounded-lg shodow hover:shadow-lg">
        <date-template></date-template>
        <all-hero-template :heroes="heroes" @setFavHero="setFavHero" @editHero="editHero" @deleteHero="deleteHero" ></all-hero-template>
      <add-new-hero
          ref='addNewHero'
          :isUpdate=updateHero
          @updateHero="updateHeroMethod"
          @addNewHero="addHero" />
        <fav-heroes-component :favHeroes="favHeroes"></fav-heroes-component>
    </div>
>>>>>>> a45e0b7c3b1187a3eff632738e52d4f329f534f1
  </div>
</template>


<script>
import AddNewHero from './components/AddNewHero'
import DateTemplate from './components/DateTemplate'
<<<<<<< HEAD
import HeroList from './components/HeroList'
import FavouriteHeroes from './components/FavouriteHeroes'

=======
import AllHeroTemplate from './components/AllHeroTemplate'
import FavHeroesComponent from './components/FavHeroesComponent'
>>>>>>> a45e0b7c3b1187a3eff632738e52d4f329f534f1
export default {
  name: 'App',
  components: {
   AddNewHero,
   DateTemplate,
<<<<<<< HEAD
   HeroList,
   FavouriteHeroes
=======
   AllHeroTemplate,
   FavHeroesComponent

>>>>>>> a45e0b7c3b1187a3eff632738e52d4f329f534f1
  },
  data:function(){
    return {
      updateHero:false,
      favHeroes: [],
      heroes:[
        {
          id:1,
          name:'Super Man'
        },
        {
          id:2,
          name:'Bat Man'
        },
        {
          id:3,
          name:'Iron Man'
        },
        {
          id:4,
          name:'Spider Man'
        },
        {
          id:5,
          name:'Angry Man'
        }
      ],
      isDisabled:false,
      heroToEdit:null,
    }
  },
  methods:{
    editHero(hero){
      console.log( hero )
      this.updateHero = true
      this.heroToUpdate = hero.id
      this.heroToEdit = hero
      this.$refs['addNewHero'].$refs['heroInput'].value = hero.name
    },
    addHero:function(hero){
      this.heroes.push( hero )
    },
    updateHeroMethod:function(){
      const heroIndex = this.heroes.indexOf(this.heroToEdit);
      this.heroes[heroIndex].name = this.$refs['addNewHero'].$refs['heroInput'].value
      this.updateHero = false
      this.$refs['addNewHero'].$refs['heroInput'].value = ""
    }, 
    deleteHero(hero){
     this.heroes = this.heroes.filter( (heroObj) => heroObj.id != hero.id )
    },
    setFavHero(hero){
      const contains = this.favHeroes.find(  heroObj =>  heroObj.id == hero.id  );
      if( !contains ){
        this.favHeroes.push( hero )
      }

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