import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TodosService {
  async getTodos() {
    try {
      const res = await api.get('fasula/todos')
      AppState.todos = res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async createTodo(newTodo) {
    try {
      const res = await api.post('fasula/todos', newTodo)
      AppState.todos.push(res.data)
      logger.log(AppState.todos)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const todosService = new TodosService()
