<template>
  <ul class="my-6">
    <li v-for="(hero,index) in heroes" :key='index' class='mt-7 grid grid-cols-2'>
      <span v-text="hero.name" class="text-xl text-gray-600"></span>
      <div class="grid grid-cols-3 gap-2">
        <button class="btn-indigo" @click="setFavHero(hero,index)">
          <svg class="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg><span>Set Fav</span>
        </button>
        <button class="btn-warning" @click="editHero(hero)">
          <svg class="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span>Edit Me</span>
        </button>
        <button class="btn-danger" @click="deleteHero(hero)">
          <svg class="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          <span>Delete Me</span>
        </button>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name:"AllHeroTemplate",
  props:['heroes'],
  methods:{
    setFavHero:function(hero){
      this.$emit('setFavHero',hero)
    },
    editHero:function(obj){
      this.$emit('editHero',obj)
    },
    deleteHero:function(hero){
      this.$emit('deleteHero',hero)
    }
  }
}
</script>