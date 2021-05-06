import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class QuotesService {
  async getQuote() {
    try {
      const res = await api.get('quotes')
      logger.log(res.data)
      AppState.quote = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const quotesService = new QuotesService()
