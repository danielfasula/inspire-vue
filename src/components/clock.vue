<template>
  <div class="row h-100 d-flex align-items-center">
    <div class="col-12 clock">
      <h1>{{ state.time }}</h1>
      <h2>{{ state.greeting }}</h2>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Clock',
  props: [],
  setup() {
    const state = reactive({
      time: computed(() => AppState.time),
      greeting: computed(() => AppState.greeting)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style scoped>
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 2.2rem;
}
.clock {
  text-align: center;
}
</style>
