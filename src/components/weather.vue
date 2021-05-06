<template>
  <div class="row h-75">
    <div class="col-12 weather text-right" v-if="weather.main">
      <h3 class="mt-4 mr-3">{{ convertTemp(weather.main.temp) }}°F</h3>
      <h3 class="n mr-3">
        {{ weather.name }}
      </h3>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Weather',
  props: [],
  setup() {
    return {
      weather: computed(() => AppState.weather),
      convertTemp(temp) {
        return Math.floor((temp - 273.15) * 9 / 5 + 32)
      }
    }
  },
  components: {}
}
</script>

<style scoped>
.n {
  margin-top: -10px;
}
</style>
