import { AppState } from '../AppState'

class ClockService {
  getTime() {
    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let session = 'AM'
    AppState.greeting = (h < 12) ? 'Good Morning!' : (h >= 12 && h < 18) ? 'Good Afternoon!' : 'Good Evening!'

    session = (h > 12) ? session = 'PM' : session
    h = (h === 0) ? h = 12 : h
    h = (h > 12) ? h -= 12 : h
    // @ts-ignore
    h = (h < 10) ? '0' + h : h
    // @ts-ignore
    m = (m < 10) ? '0' + m : m

    AppState.time = h + ':' + m + ' ' + session
  }
}

export const clockService = new ClockService()
