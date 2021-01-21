<template>
    <div class="markdown-wrapper">
        <div class="my-6 text-center">
          <h1 class="text-5xl text-center">MarkDown App</h1>
        </div>
      <div class="mt-12 grid grid-cols-2 mx-6 h-full">
          <article class="col-span-1 h-full border border-black">
            <textarea name="inputTextArea" placeholder="Try typing some html" v-model="text" class="h-full w-full"></textarea>
          </article>
          <article class="col-span-1 h-full border border-black bg-gray-100">
            <div class="result" v-html="text"></div>
          </article>
        </div>
    </div>
</template>
<script>
export default {
    name:"MardownTemplate",
    data:function(){
        return{
            text:'',
        }
    }
}
</script>