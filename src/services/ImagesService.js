import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ImagesService {
  async getImage() {
    try {
      const res = await api.get('images')
      AppState.image = res.data.url
    } catch (error) {
      logger.log(error)
    }
  }
}

export const imagesService = new ImagesService()
