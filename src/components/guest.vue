<template>
  <div class="grid grid-cols-1 md:grid-cols-2 pt-6">
      <div class="max-w-xl pr-24">

        <div class="pt-16">
          <h1 class="text-5xl font-bold tracking-tight pt-6 bg-gradient-to-br from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Выберите,<br />
            &#8212; как Вы собираетесь попасть на территорию:
          </h1>


          <div class="flex items-center gap-4 pt-12">
            <button class="flex items-center gap-2 px-6 py-4 text-gray-500 rounded-xl bg-gray-900 shadow-glow hover:shadow-teal-500/40 hover:-translate-y-1 transition ease-out"
            @click="gotoAutomobileForm">
              <Automobile class="h-7 w-7" />
              Автомобиль
            </button>
            <button class="flex items-center gap-2 px-6 py-4 text-gray-500 rounded-xl bg-gray-900 shadow-glow hover:shadow-teal-500/40 hover:-translate-y-1 transition ease-out"
            @click="gotoPedestrianForm">
              <Pedestrian class="h-7 w-7" />
              Пешеход
            </button>
          </div>

          
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
import { useRouter } from 'vue-router';

const router = useRouter();

function gotoAutomobileForm() {
    router.push({ name: "AutomobileForm" })
}

function gotoPedestrianForm() {
    router.push({ name: "PedestrianForm" })
}




</script>