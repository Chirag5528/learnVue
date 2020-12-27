<template>
    <div class="dateToday flex flex-row w-full">
        <div class="fullDate w-1/2">
            <div class="flex">
            <div>
                <h2 class='text-gray-600 text-6xl' v-text="dateToday.day"></h2>
            </div>
            <div class="ml-2">
                <h6 class='text-xl text-gray-600' v-text="dateToday.month"></h6>
                <h6 class='text-xl text-gray-600' v-text="dateToday.year"></h6>
            </div>
            </div>
        </div>
        <div class="day w-1/2 text-right">
            <h4 class="dayName text-gray-600 text-5xl" v-text="dateToday.dayName"></h4>
        </div>
    </div>
</template>
<script>

    export default{
        name:"DateTemplate",
        data:function(){
            return{
                    dateToday:{
                        day: new Date().getDate(),
                        dayName:new Date().toLocaleString('default', { weekday: 'long' }),
                        month:new Date().toLocaleString('default', { month: 'short' }),
                        year:new Date().getFullYear()
                    }
                }
            },
            created(){
                console.log( this.dateToday );
            }
        }

</script>