
import About from "@/view/About";
import Home from "@/view/Home";
import VueRouter from "vue-router";


const routes = [
    {
        path: '/about',
        name: "about",
        component: About
    },
    {
        path: '/',
        name: "home",
        component: Home
    }
]

//对象创建方式与java一样
const router =new VueRouter({
    mode: 'history',
    routes
})

export default router