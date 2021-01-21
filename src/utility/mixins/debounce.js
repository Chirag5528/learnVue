export const debounce = {
    created(){
        this.debounce()
    },
    data:function(){
        return{
            timeout: ""
        }
    },
    methods:{
        debounce(func,wait = 500){
            clearTimeout(this.timeOut)
            setTimeout( func, wait )
        }
    }
}