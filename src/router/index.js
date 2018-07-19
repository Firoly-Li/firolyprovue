import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChatVue from '@/components/chatpage/ChatVue'
import ChatHeader from '@/components/chatpage/ChatHeader'
import login from "@/components/login/login"
import regist from "@/components/login/regist"
import  chatbox from '@/components/chatpage/ChatBox'
import  blog from '@/components/blog/BlogHome'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ChatVue',
      name :'ChatVue',
      component: ChatVue,
      children:[
        {
          path: '/ChatVue/chatbox',
          component: chatbox
        },

      ]
    },
    {
      path: '/',
      name :'login',
      component: login
    },
    {
      path: '/regist',
      name :'regist',
      component: regist
    },
    {
      path: '/blog',
      name :'blog',
      component: blog
    }

  ]
})
