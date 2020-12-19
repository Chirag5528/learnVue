<template>
  <div>
    <h2>Active Hero</h2>
    <ul>
      <li v-for="(hero,index) in heroes" :key='index' class='bottom-margin-2'>
        <span v-text="hero.name" class="right-margin-2"></span>
        <button class="right-margin-2" @click="editHero(hero.name, index)">Edit Me</button>
        <button @click="deleteHero(hero.name)">Delete Me</button>
      </li>
    </ul>
    <input type="text" ref='heroInput' />
    <button v-if="!updateHero" @click='addHero'>Set New Hero</button>
    <button v-else @click='updateHeroMethod'>Update Hero</button>
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
      const name = this.$refs['heroInput'].value;
      this.heroes.push( {name} )
    },
    editHero(heroName,index){
      this.updateHero = true;
      this.heroToUpdate = index;
      this.$refs['heroInput'].value = heroName;
    },
    deleteHero(heroName){
     this.heroes = this.heroes.filter( (hero) => hero.name != heroName ) 
    },
    updateHeroMethod(){
      this.heroes[this.heroToUpdate].name =  this.$refs['heroInput'].value;
    }
      
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.right-margin-2{
  margin-right:2em;
}
.bottom-margin-2{
  margin-bottom:2em;
}
</style>
