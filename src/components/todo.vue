<template>
  <li class="list-group-item bg-dark">
    <button class="close mb-3" @click="deleteTodo">
      <span>&times;</span>
    </button>
    <input
      class="form-check-input ml-1 mt-2"
      type="checkbox"
      :v-bind="checkCompletion()"
      aria-label="Checkbox"
      @click="changeCompletion"
    />
    <p class="ml-4">
      <!-- :class="${todo.completed ? 'completed' : ''}" -->
      {{ todo.description }}
    </p>
  </li>
</template>

<script>
import { todosService } from '../services/TodosService'
import { logger } from '../utils/Logger'
export default {
  name: 'Todo',
  props:
  {
    todo: { type: Object, required: true }
  },
  setup(props) {
    return {
      checkCompletion() {
        return props.todo.completed ? 'checked' : ''
      },
      async changeCompletion() {
        try {
          await todosService.changeCompletion(props.todo.id)
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>
