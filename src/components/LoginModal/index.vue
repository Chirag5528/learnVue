<template>
    <div class="modal-wrapper">
        <div 
        class="modal-backdrop"
        :class="[ ( isVisible ) ? 'visible' : 'invisible' ]"
        @click="toggleModal"
        ></div>    
        <div 
        class="modal"
        :class="[ ( isVisible ) ? 'visible' : 'invisible' ]" >
            <div class="modal-content">
                <div class="modal-header">
                    <!-- Modal Header -->
                    <div>
                        <h2 class="modal-title text-3xl">Title</h2>
                    </div>
                    <div class="close justify-end flex" @click="toggleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div class="modal-body px-10 py-4">
                    <!-- Write your content here -->
                    <div class="form-group"></div>
                </div>
                <!-- Footer Goes Here -->
                <div class="modal-footer"></div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:"LoginModal",
    data:function(){
        return{
            isVisible:false,
        }
    },
    methods:{
        toggleModal:function(){
            console.log("MODAL TOGGLED");
            this.isVisible = ! this.isVisible
        }
    },
    mounted(){
        
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active{
  transition: all 1s ease-in-out;
}
.fade-enter-from{
  transform: translateX(-100%);
}
.fade-leave-to{
  transform: translateX(100%);
}
</style>