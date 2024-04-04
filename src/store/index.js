import { defineStore } from "pinia";

export const useStore = defineStore('store', {
  state: () => ({
    data: [
      { id: 1, value: 'test1' },
      { id: 2, value: 'test2' },
      { id: 3, value: 'test3' },
      { id: 4, value: 'test4' },
      { id: 5, value: 'test5' }
    ]
  })
});