<template>
    <div class="slider-wrapper">
        <div class="flex flex-wrap w-full h-120 flex-row relative" @mouseenter="stopInterval" @mouseleave="startInterval">
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
            <div class="left-anchor w-8 h-8 text-white" @click="sliderCount(1)">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            </div>
            <div class="right-anchor w-8 h-8 text-white" @click="sliderCount(1)" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>
<!--Anchors-->
<!--Bullets-->
          <div class="bullets absolute top-0 h-full w-full flex justify-center items-end py-2">
            <ul class="list-disc grid grid-flow-col gap-6 text-xl">
              <li class="cursor-pointer" :class="[ currentSlide == count - 1 ? 'text-gray-600' : 'text-white']" @click="setCurrentSlide(count)" v-for="count in images.length" :key="count"></li>
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
            images:['alexandr.jpg','pixabay.jpg','tim-mossholder.jpg'],
            image:''
        }
    },
    methods:{

        changeSlider:function(){
          this.currentSlide = 1
            this.interval = setInterval(() => {
                this.currentSlide = (this.currentSlide >= 2) ? 0 : this.currentSlide+1
            }, 2000)
        },
      sliderCount:function(count){

        this.currentSlide = (this.currentSlide >= 2 ) ? 0 : this.currentSlide + count
      },
      setCurrentSlide:function(count) {
          this.currentSlide = count - 1
      },
      stopInterval:function(){
          clearInterval(this.interval)
          this.interval = ''
      },
      startInterval:function(){
        this.stopInterval();
        this.interval = setInterval(() => {
          this.currentSlide = (this.currentSlide >= 2) ? 0 : this.currentSlide+1
        }, 2000)
      }
    },
    mounted(){
      // this.sliderCount()
        this.changeSlider()
    },
    beforeMount(){
        this.interval = ''
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
}
.anchors{
  z-index: 2;
}
</style>