<template>
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
</template>
<script>

    export default{
        name:'FavouriteHeroes',
        props:['favHeroes']
    }

</script>