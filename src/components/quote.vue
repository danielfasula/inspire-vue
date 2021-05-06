<template>
  <div class="row h-25">
    <div class="col-12 text-center quote">
      <h4>{{ quote.content }}</h4>
      <h5>{{ quote.author }} <small>(probably)</small></h5>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Quote',
  props: [],
  setup() {
    return {
      quote: computed(() => AppState.quote)
    }
  },
  components: {}
}
</script>
