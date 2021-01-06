<template>
    <div>
        <ul class="my-6">
            <li v-for="(hero,index) in heroes" :key='index' class='mt-5 grid grid-cols-4 gap-5'>
                <span v-text="hero.name" class="text-xl text-gray-600"></span>
                <button class="btn-indigo" @click="setFavHero(hero.name)">Set Fav</button>
                <button class="btn-warning" @click="editHero(hero.name,index)">Edit Me</button>
                <button class="btn-danger" @click="deleteHero(hero.name)">Delete Me</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"HeroList",
        data:function(){
            return{

            }
        },
        props:['heroes']
    }
</script>