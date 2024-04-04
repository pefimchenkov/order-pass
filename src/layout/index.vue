<template>
  <div class="min-h-screen w-full bg-gray-800 text-white relative">

       <Circle class="hidden md:block absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-40" />

      <div class="hidden md:block bg-gray-900 inset-y-0 right-0 w-2/5 absolute"></div>
      <div class="mx-auto max-w-7xl px-4 pt-8 relative">

          <navbar />
          <app-main />

      </div>
  </div>
</template>
  
  <script setup>

  import navbar from './components/navbar.vue'
  import appMain from './components/appMain.vue'


  import Circle from '@/img/circle.svg'
  
  
  </script>
  
  <style lang="scss" scoped>
  </style>
  