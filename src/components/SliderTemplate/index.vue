<template>
    <div class="flex flex-wrap w-full flex-row h-screen">
        <div class="absolute w-full" v-for="(image,index) in images" :key="index">
            <div class="h-120" :class="image" v-if="currentSlide === index"></div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            interval:"",
            currentSlide:0,
            images:['bg-royalblue-600','bg-flamingo-600','bg-scarlet-600']
        }
    },
    methods:{
        changeSlider:function(){
            this.interval = setInterval(() => {
                this.currentSlide = (this.currentSlide === 2) ? 0 : this.currentSlide+1
            }, 3000)
        }
    },
    mounted(){
        this.changeSlider()
    },
    beforeMount(){
        this.interval = ''
    }
}
</script>