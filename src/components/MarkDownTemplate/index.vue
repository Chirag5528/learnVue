<template>
    <div class="markdown-wrapper">
        <div class="my-6 text-center">
          <h1 class="text-5xl text-center">MarkDown App</h1>
        </div>
      <div class="mt-12 grid grid-cols-2 mx-6 h-screen">
          <article class="col-span-1 h-full">
            <textarea name="inputTextArea" placeholder="Try typing some html" @input="changeText"  class="h-full w-full p-3"></textarea>
          </article>
          <article class="col-span-1 h-full bg-gray-100">
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
            text:"",
            timeout:"",
        }
    },
  created(){
      this.text = "<div class='p-4'>\n" +
          "<h2 class='text-indigo-600 text-5xl'>MarkDown App</h2>\n" +
          "<p class='my-2'>Try typing something on the left side to get the results on the right one.</p>\n" +
          "<p>You can also use tailwind classes if you want or create your own custom css using the <strong class='text-red-600'>style</strong> tag.</p>\n" +
          "<button class='py-1 my-4 px-8 bg-indigo-600 rounded text-white text-xl'>Hola!</button>\n" +
          "</div>"
  },
  methods:{
    changeText:function(e){
      
      const task = () => (this.text = e.target.value)
      this.debounce(task,500)
    },
    debounce:function(func,timeOut = 500){
      this.timeout = setTimeout(func, timeOut);
      clearTimeout(timeOut)
    }
  }
}
</script>