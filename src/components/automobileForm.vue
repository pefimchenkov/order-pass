<template>
  <div class="grid grid-cols-1 md:grid-cols-2 pt-6">
      <div class="max-w-xl pr-24">

        <div class="pt-6">
          <h1 class="text-5xl font-bold tracking-tight pt-6 bg-gradient-to-br from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Для гостей,<br />
            &#8212; на автомобиле:
          </h1>


          <div class="border-b border-gray-900/10 pb-6">

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <div class="grid lg:flex items-center mt-2 shadow-glow focus-within:shadow-teal-500/40 transition-shadow ease-out rounded-xl">
              <input
                type="text"
                placeholder="ФИО"
                class="flex-1 lg:rounded-xl border-2 lg:border-r-0 border-gray-700 bg-gray-900 leading-6 focus:outline-none px-8 py-4"
              />
            </div>
            </div>

            <div class="sm:col-span-6">
              <div class="grid lg:flex items-center mt-1 shadow-glow focus-within:shadow-teal-500/40 transition-shadow ease-out rounded-xl">
              <input
                type="text"
                placeholder="Дата посещения"
                class="flex-1 lg:rounded-xl border-2 lg:border-r-0 border-gray-700 bg-gray-900 leading-6 focus:outline-none px-8 py-4"
              />
            </div>
            </div>

            <div class="sm:col-span-6">
              <div class="grid lg:flex items-center mt-1 shadow-glow focus-within:shadow-teal-500/40 transition-shadow ease-out rounded-xl">
              <input
                type="text"
                placeholder="Марка авто"
                class="flex-1 lg:rounded-xl border-2 lg:border-r-0 border-gray-700 bg-gray-900 leading-6 focus:outline-none px-8 py-4"
              />
            </div>
            </div>

            <div class="sm:col-span-6">
              <div class="grid lg:flex items-center mt-1 shadow-glow focus-within:shadow-teal-500/40 transition-shadow ease-out rounded-xl">
              <input
                type="text"
                placeholder="Номер авто"
                class="flex-1 lg:rounded-xl border-2 lg:border-r-0 border-gray-700 bg-gray-900 leading-6 focus:outline-none px-8 py-4"
              />
            </div>
            </div>

            <div class="sm:col-span-6">
              <div class="grid lg:flex items-center mt-1 shadow-glow focus-within:shadow-teal-500/40 transition-shadow ease-out rounded-xl">
              <input
                type="text"
                placeholder="Компания (куда оформляем)"
                class="flex-1 lg:rounded-xl border-2 lg:border-r-0 border-gray-700 bg-gray-900 leading-6 focus:outline-none px-8 py-4"
              />
            </div>
            </div>
          </div>
          </div>

          <button class="px-8 py-4 lg:rounded-xl border-2 lg:border-l-0 border-gray-700 bg-teal-500/90 hover:bg-teal-500 transition-colors duration-300 text-grey-800 text-lg leading-6 font-bold">Отправить
          </button>

          
        </div>

      </div>
      
      <div class="pt-10 hidden md:block">
        <div class="flex justify-center gap-8">
          <img src="@/img/screen-1.jpg" alt="" class="h-full w-full animate-hover rounded-2xl" />
        </div>
      </div>
    </div>
</template>

<script setup>

// import { useStore } from '@/store';

import Automobile from '@/icons/automobile.svg'
import Pedestrian from '@/icons/pedestrian.svg'



</script>