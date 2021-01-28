<template>
    <div class="slider-wrapper w-full overflow-hidden">
        <div class="w-full h-120 flex-row relative" @mouseenter="stopInterval" @mouseleave="startInterval">
          <div
              class="absolute w-full h-full"
              v-for="(image,index) in images"
              :key="index">
            <transition name="fade">
              <div
                  class="h-full image bg-no-repeat bg-cover	bg-center"
                  :style="{ backgroundImage: 'url(' + require( '@/assets/images/'+images[currentSlide] ) + ')' }"
                  v-if="currentSlide === index">
              </div>
            </transition>
          </div>
<!--Anchors-->
          <div class="anchors absolute top-0 h-full w-full flex justify-between items-center px-4">
            <div class="left-anchor w-8 h-8 text-white" @click="setCurrentSlide(-1)">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </div>
            <div class="right-anchor w-8 h-8 text-white" @click="setCurrentSlide(1)" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>
<!--Anchors-->
<!--Bullets-->
          <div class="bullets absolute top-0 h-full w-full flex justify-center items-end py-2">
            <ul class="list-disc grid grid-flow-col gap-6 text-2xl">
              <li class="cursor-pointer" :class="[ currentSlide == count - 1 ? 'text-gray-600 shadow-lg' : 'text-white']" @click="setCurrentSlide(count)" v-for="count in images.length" :key="count"></li>
            </ul>
          </div>
<!--Bullets-->
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            interval:"",
            currentSlide:0,
            images:[],
            image:'',
            checkKeyPress:'',
        }
    },
    methods:{
        setCurrentSlide:function(count = 1) {              
            if( count == 1 ){
                this.currentSlide = (this.currentSlide >= this.images.length - 1 ) ? 0 : this.currentSlide + count
            }else{
                this.currentSlide = (this.currentSlide <= 0 ) ? this.images.length - 1 : this.currentSlide + count
                console.log( count + "=====" + this.currentSlide );
            }
            window.removeEventListener('keydown',this.checkKeyPress,true)
        },
        stopInterval:function(){
            clearInterval(this.interval)
            this.interval = ''
        },
        startInterval:function(){
            this.stopInterval();
            this.interval = setInterval(() => {
                this.setCurrentSlide()
            }, 2000)
        },
        changeSlidesWithArrows:function(){
            this.checkKeyPress = window.addEventListener('keydown',this.checkKeyPressed,true)
        },
        checkKeyPressed:function(e){
            const code = e.key
            if( code === "ArrowRight" ){
                this.setCurrentSlide(1)
            }else if( code === "ArrowLeft" ){
                this.setCurrentSlide(-1)
            }
        }
    },
    mounted(){
        this.startInterval()
        this.changeSlidesWithArrows()
        this.images = ['alexandr.jpg','pixabay.jpg','tim-mossholder.jpg']
    },
    beforeMount(){
        this.interval = ''
    },
    beforeUnmount(){
        window.removeEventListener('keydown',this.checkKeyPressed,true)
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active{
  transition: all 1s ease-in-out;
}
.fade-enter-from, .fade-leave-to{
  /* opacity: 0; */
}
.fade-enter-from{
  transform: translateX(-100%);
}
.fade-leave-to{
  transform: translateX(100%);
}

.anchors{
  z-index: 2;
}
</style>