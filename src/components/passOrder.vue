<template>
  <div class="grid grid-cols-1 md:grid-cols-2 pt-6">
      <div class="max-w-xl pr-24">

        <div class="pt-16">
          <h1 class="text-5xl font-bold tracking-tight pt-6 bg-gradient-to-br from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Выберите,<br />
            &#8212; в качестве кого Вы посещаете наш БЦ:
          </h1>


          <div class="flex items-center gap-4 pt-12">
            <button class="flex items-center gap-2 px-6 py-4 text-gray-500 rounded-xl bg-gray-900 shadow-glow hover:shadow-teal-500/40 hover:-translate-y-1 transition ease-out"
            @click="gotoGuestPage">
              <Visitor class="h-7 w-7" />
              Гость
            </button>
            <button class="flex items-center gap-2 px-6 py-4 text-gray-500 rounded-xl bg-gray-900 shadow-glow hover:shadow-teal-500/40 hover:-translate-y-1 transition ease-out">
              <Owner class="h-7 w-7" />
              Арендатор / Собственник
            </button>
          </div>

          <div class="mt-5">
            {{ store.data }}
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
</template>

<script setup>

import { useStore } from '@/store';
import { useRouter } from 'vue-router'

const router = useRouter()

import Owner from '@/icons/owner.svg'
import Visitor from '@/icons/visitor.svg'

const store = useStore();

function gotoGuestPage() {
  router.push({ name: 'Guest' })
}


</script>