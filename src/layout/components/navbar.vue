<template>
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
            <Decoration class="w-24 absolute" style="left: -2rem" />
          </a>
        </div>
      </nav>
</template>

<script setup>

import Decoration from '@/img/decoration.svg'

</script>