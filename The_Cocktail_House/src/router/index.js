import Vue from 'vue'
import Router from 'vue-router'
import Cocktails from "@/components/Cocktails"
import CocktailDay from '@/components/CocktailDay'


Vue.use(Router)

export default new Router({
    routes:[
        { 
            path:'/',
            name:Cocktails,
            component:Cocktails
        },
        { 
            path:'/cocktailDay',
            name:CocktailDay,
            component:CocktailDay
        },
       
    ]
})