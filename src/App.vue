<template>
  <main>
    <div class="bottom">
      <div class="right">
        <div class="content">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, onMounted } from "vue";


export default defineComponent({

  name: 'App',
  setup() {

    onMounted(() => {
      console.log('Загрузка MAin компонента')
    })

    return {};
  },

})

</script>

<style>
</style>
