import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class WeatherService {
  async getWeather() {
    try {
      const res = await api.get('weather')
      AppState.weather = res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const weatherService = new WeatherService()
