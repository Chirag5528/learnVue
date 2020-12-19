<template>
  <div>
    <h2>Active Hero</h2>
    <ul>
      <li v-for="(hero,index) in heroes" :key='index' class='bm-2'>
        <span v-text="hero.name" class="rm-2"></span>
        <button class="rm-2" @click="editHero(hero.name, index)">Edit Me</button>
        <button class="rm-2" @click="deleteHero(hero.name)">Delete Me</button>
        <button @click="setFavHero(hero.name)">Set Fav</button>
      </li>
    </ul>
    <input type="text" ref='heroInput' class='rm-2' />
    <button v-if="!updateHero" @click='addHero'>Set New Hero</button>
    <button v-else @click='updateHeroMethod'>Update Hero</button>
    <div v-if="favHeroes.length > 0">
      <h2>Favourite Heroes</h2>
      <ol>
        <li class='bm-2' v-for='(hero,index) in favHeroes' :key='index' v-text="hero.name"></li>
      </ol>
    </div>
  </div>    
</template>


<script>
export default {
  name: 'App',
  components: {
   
  },
  data:function(){
    return {
      updateHero:false,
      heroToUpdate:0,
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
    addHero(){
      
      //Basic Validation
      if( this.$refs['heroInput'].value == "" ){
        this.$refs['heroInput'].focus();
        return alert("Name Cannot Be Empty");
        
      }
      const name = this.$refs['heroInput'].value;
      
      this.$refs['heroInput'].value = '';
      
      this.heroes.push( {name} )
    },
    editHero(heroName,index){
      this.updateHero = true
      this.heroToUpdate = index
      this.$refs['heroInput'].value = heroName
    },
    deleteHero(heroName){
     this.heroes = this.heroes.filter( (hero) => hero.name != heroName ) 
    },
    updateHeroMethod(){
      
      //Basic Validation
      if( this.$refs['heroInput'].value == "" ){
        this.$refs['heroInput'].focus();
        return alert("Name Cannot Be Empty");
      }

      this.heroes[this.heroToUpdate].name =  this.$refs['heroInput'].value;
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
  color: #2c3e50;
  margin-top: 60px;
}
.rm-2{
  margin-right:2em;
}
.bm-2{
  margin-bottom:2em;
}
</style>
