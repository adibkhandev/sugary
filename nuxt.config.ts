// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  mode:'static',
  router:{
    base:'/sugary/'
  },
  css:[
     '~/assets/css/font.css',
      '~/assets/css/reset.css',
       '~/assets/css/animations.css',
  ]
})
