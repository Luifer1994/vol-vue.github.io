import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })

createApp(App).use(router).use(store).mount('#app')
