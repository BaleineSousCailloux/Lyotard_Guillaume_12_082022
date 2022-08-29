import { GetUserDatasMocked, GetUserDatas } from '../API/fetchDatas.js'
import FormatUserDatas from '../API/dataFormaters/FormatUserDatas'
import FormatUserActivity from '../API/dataFormaters/FormatUserActivity'
import FormatUserAverage from '../API/dataFormaters/FormatUserAverage'
import FormatUserPerformance from '../API/dataFormaters/FormatUserPerformance'


export async function GetUserDataOk(online, userId) {
    let userDataOk
    async function GetUserData() {
      let userDatas
      if (online === true) {
        userDatas = await GetUserDatas('data', userId)
        return userDatas
      } else {
        userDatas = GetUserDatasMocked('data', userId)
        return userDatas
      }
    }
    const toFormat = await GetUserData()
    userDataOk = new FormatUserDatas(toFormat)
    return userDataOk
}

export async function GetUserActivityOk(online, userId) {
    let userActivityOk
    async function GetUserActivity() {
      let userActivity
      if (online === true) {
        userActivity = await GetUserDatas('activity', userId)
        return userActivity
      } else {
        userActivity = GetUserDatasMocked('activity', userId)
        return userActivity
      }
    }
    const toFormat = await GetUserActivity()
    userActivityOk = new FormatUserActivity(toFormat)
    return userActivityOk
}

export async function GetUserPerformanceOk(online, userId) {
    let userPerformanceOk
    async function GetUserPerformance() {
      let userPerformance
      if (online === true) {
        userPerformance = await GetUserDatas('performance', userId)
        return userPerformance
      } else {
        userPerformance = GetUserDatasMocked('performance', userId)
        return userPerformance
      }
    }
    const toFormat = await GetUserPerformance()
    userPerformanceOk = new FormatUserPerformance(toFormat)
    return userPerformanceOk
}

export async function GetUserSessionsOk(online, userId) {
    let userSessionsOk
    async function GetUserSessions() {
      let userSessions
      if (online === true) {
        userSessions = await GetUserDatas('averageSessions', userId)
        return userSessions
      } else {
        userSessions = GetUserDatasMocked('averageSessions', userId)
        return userSessions
      }
    }
    const toFormat = await GetUserSessions()
    userSessionsOk = new FormatUserAverage(toFormat)
    return userSessionsOk
}