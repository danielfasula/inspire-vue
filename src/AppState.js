import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  image: null,
  todos: [],
  quote: {},
  weather: {},
  time: null,
  greeting: null,
  user: null
})
