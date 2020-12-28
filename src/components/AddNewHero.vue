<template>
    <div class="grid grid-cols-3 gap-8 mt-10">
        <input type="text" ref='heroInput' class='rm-2 col-span-2 input-control'/>
        <button class="btn-indigo col-span-1"  v-if="!isUpdate" @click='addHero'>Set New Hero</button>
        <button class="btn-indigo col-span-1"  v-else @click='updateHeroMethod'>Update Hero</button>
    </div>
</template>
<script>
export default{
        name:'AddNewHeroComponent',
        data:function(){
            return{}
        },
        props:['isUpdate','heroToUpdate'],
        methods:{
            addHero:function(){
                //Basic Validation
                if( this.$refs['heroInput'].value == "" ){
                    this.$refs['heroInput'].focus()
                    return alert("Name Cannot Be Empty")
                }
                const name = this.$refs['heroInput'].value
                
                this.$refs['heroInput'].value = ''

                this.$emit( 'addNewHero', { name, id:new Date().getTime().toString() } )
            },
            updateHeroMethod:function(){
                //Basic Validation
                if( this.$refs['heroInput'].value == "" ){
                    this.$refs['heroInput'].focus();
                    return alert("Name Cannot Be Empty");
                }
                this.$emit( 'updateHero' )
            }
        },
        created(){}
    }
</script>