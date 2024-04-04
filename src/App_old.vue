<template>
  <div class="min-h-screen w-full bg-gray-800 text-white relative">
    <Circle class="hidden md:block absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 opacity-40" />
    <div class="hidden md:block bg-gray-900 inset-y-0 right-0 w-2/5 absolute"></div>
    <div class="mx-auto max-w-7xl px-4 pt-8 relative">

      <!-- Desktop Navbar -->
      <nav class="flex items-center justify-between">
        <a href="#" class="text-4xl font-bold">Заказ пропусков</a>

        <div class="hidden md:flex items-center gap-32">
          <ul class="flex items-center gap-12 font-medium text-gray-500">
            <li>
              <a href="#" class="group text-xl  hover:text-white transition duration-300">
                Главная
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500"></span>
              </a>
            </li>
            <li>
              <a href="#" class="group text-xl  hover:text-white transition duration-300">
                Новости
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-500"></span>
              </a>
            </li>
          </ul>
        </div>


        <button @click="showNav()" type="button" class="block md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>

        <div class="hidden md:flex items-center gap-4 font-medium text-gray-500">
          <a href="#" class="hover:text-white text-xl mr-3">Войти</a>
          <a href="#" class="relative hover:text-white text-xl">
            <span>@сапр</span>
            <!-- <img src="/img/decoration.svg" alt="" class="w-32 absolute left-0" /> -->
          </a>
        </div>
      </nav>


      <div class="grid grid-cols-1 md:grid-cols-2 pt-6">
        <div class="max-w-xl pr-24">

          <div class="pt-16">
            <h1 class="text-5xl font-bold tracking-tight pt-6 bg-gradient-to-br from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Выберите,<br />
              &#8212; в качестве кого Вы посещаете наш БЦ:
            </h1>

            <!-- <div class="grid lg:flex items-center mt-10 shadow-glow focus-within:shadow-teal-500/40 transition-shadow ease-out rounded-xl">
              <input type="text"
                     placeholder="sales@xstudio.dev"
                     class="flex-1 lg:rounded-l-xl border-2 lg:border-r-0 border-gray-700 bg-gray-900 leading-6 focus:outline-none px-8 py-4">
              <button class="px-8 py-4 lg:rounded-r-xl border-2 lg:border-l-0 border-gray-700 bg-teal-500/90 hover:bg-teal-500 transition-colors duration-300 text-gray-900 text-lg leading-6 font-bold">Get Link</button>
            </div> -->


            <div class="flex items-center gap-4 pt-12">
              <button class="flex items-center gap-2 px-6 py-4 text-gray-500 rounded-xl bg-gray-900 shadow-glow hover:shadow-teal-500/40 hover:-translate-y-1 transition ease-out">
                <Visitor class="h-7 w-7" />
                Гость
              </button>
              <button class="flex items-center gap-2 px-6 py-4 text-gray-500 rounded-xl bg-gray-900 shadow-glow hover:shadow-teal-500/40 hover:-translate-y-1 transition ease-out">
                <Owner class="h-7 w-7" />
                Арендатор / Собственник
              </button>
            </div>
            
          </div>

        </div>
        
        <div class="pt-10 hidden md:block">
          <div class="flex justify-center gap-8">
            <img src="@/img/screen-1.jpg" alt="" class="h-full w-full animate-hover rounded-2xl" />
            <!-- <img src="/img/screen-2.png" alt="" class="hidden lg:block h-full w-64 pt-20 animate-hover" /> -->
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

import Owner from '@/icons/owner.svg'
import Visitor from '@/icons/visitor.svg'
import Circle from '@/img/circle.svg'

const isActive = ref(true)

function showNav() {
  this.isActive = !this.isActive;
}

</script>

<style scoped>

</style>
