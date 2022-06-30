
import BookVue from "@/views/BookVue.vue";
import HomeViewVue from "@/views/HomeViewVue.vue";
import LayoutVue from "@/views/LayoutVue.vue";
import LoginVue from "@/views/LoginVue.vue";
import RegisterVue from "@/views/RegisterVue.vue";
import UserVue from "@/views/UserVue.vue";
import VideoVue from "@/views/VideoVue.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "Layout",
        component: LayoutVue,
        children:[{
          path:'/',
          name:'Home',
          component: HomeViewVue
        },{
          path:"/User",
          name:"",
          component: UserVue
        },{
          path:"/Book",
          name:"",
          component: BookVue
        },{
          path:"/Video",
          name:"",
          component: VideoVue
        },{
          path:"/Login",
          name:"",
          component: LoginVue
        },{
          path:'/Register',
          name:"",
          component: RegisterVue
        }
      ]
      }
  
    ],
  });
  
  export default router;