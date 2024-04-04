<template>
    <section class="app-main">

        <router-view v-slot="{ Component, route }">
          <transition name="scale" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
        

    </section>
  </template>

  <script setup>
  </script>

  <style scoped lang="postcss">
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

  </style>