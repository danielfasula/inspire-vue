<template>
  <div class="row">
    <div class="col-10">
      <div class="card bg-dark text-white">
        <form @submit.prevent="createTodo">
          <div class="form-group d-flex justify-content-center">
            <input
              class="ml-2 mr-1 mt-1"
              type="text"
              required
              name="description"
              placeholder="Create Todo"
              v-model="state.newTodo.description"
            />

            <button class="close" type="submit">
              <span>&plus;</span>
            </button>
          </div>
        </form>
        <div class="text-center">
          <h4>Todos</h4>
          <h6>Completed: <span id="total-todos"></span></h6>
        </div>
        <ul class="list-group list-group-flush scroll" id="todos"></ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { logger } from '../utils/Logger'
import { todosService } from '../services/TodosService'
export default {
  name: 'Todos',
  props: [],
  setup() {
    const state = reactive({
      newTodo: {}
    })
    return {
      state,
      async createTodo() {
        try {
          await todosService.createTodo(state.newTodo)
          state.newTodo = {}
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>
