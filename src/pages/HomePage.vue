<template>
  <div
    class="container-fluid bg-img"
    v-if="state.image"
    :style="{ backgroundImage: `url(${state.image})` }"
  >
    <div class="row d-flex h-75">
      <div class="col-6 offset-3">
        <clock />
        <quote />
      </div>
      <div class="col-3">
        <weather />
        <todos />
      </div>
    </div>

    <!-- weather
    <div class="row weather">
      <weather />
    </div>
    clock
    <div class="row clock">
      <clock />
    </div>
    quote and todo list
    <div class="row qt">
      <quote />
      <todos />
    </div> -->
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { imagesService } from '../services/ImagesService'
import { weatherService } from '../services/WeatherService'
import { clockService } from '../services/ClockService'
import { quotesService } from '../services/QuotesService'
import { todosService } from '../services/TodosService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      image: computed(() => AppState.image)
    })
    onMounted(async () => {
      await imagesService.getImage()
      await weatherService.getWeather()
      clockService.getTime()
      await quotesService.getQuote()
      await todosService.getTodos()
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.bg-img {
  background-size: cover;
  height: 800px;
}
</style>
