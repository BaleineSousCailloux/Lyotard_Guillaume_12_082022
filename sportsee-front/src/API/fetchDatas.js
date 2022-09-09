import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from './mockedDatas'

/**
 * @property {function} GetAllUsers to get all users
 * @returns Array of users
 */
function GetAllUsers() {
  const allUsers = USER_MAIN_DATA
  return allUsers
}

/**
 * @property {function} GetUserDatasMocked to get user's datas from mocked datas
 * @param {string} datas target datas
 * @param {number} urlId user's id from url
 * @returns user target data or console error
 */
function GetUserDatasMocked(datas, urlId) {
  let userData = {}
  let formatId = Number(urlId)

  switch (datas) {
    case 'data':
      try {
        userData = USER_MAIN_DATA.find((user) => user.id === formatId)
      } catch (err) {
        console.log('===== user data error =====', err)
      }
      break
    case 'activity':
      try {
        userData = USER_ACTIVITY.find((user) => user.userId === formatId)
      } catch (err) {
        console.log('===== user data error =====', err)
      }
      break
    case 'averageSessions':
      try {
        userData = USER_AVERAGE_SESSIONS.find(
          (user) => user.userId === formatId
        )
      } catch (err) {
        console.log('===== user data error =====', err)
      }
      break
    case 'performance':
      try {
        userData = USER_PERFORMANCE.find((user) => user.userId === formatId)
      } catch (err) {
        console.log('===== user data error =====', err)
      }
      break
    default:
      console.log('les données mockées ne sont pas accessibles')
      break
  }
  return userData
}

/**
 * @property {function} GetUserDatas to get user's datas from API
 * @async
 * @param {string} datas target datas
 * @param {number} urlId user's id from url
 * @returns user target data or console error
 */
async function GetUserDatas(datas, urlId) {
  let userData
  let formatId = Number(urlId)
  const url = 'http://localhost:4000'

  switch (datas) {
    case 'data':
      try {
        const response = await fetch(`${url}/user/${formatId}`)
        userData = await response.json()
      } catch (err) {
        console.log('===== fetch user data error =====', err)
      }
      break
    case 'activity':
      try {
        const response = await fetch(`${url}/user/${formatId}/activity`)
        userData = await response.json()
      } catch (err) {
        console.log('===== fetch user data error =====', err)
      }
      break
    case 'averageSessions':
      try {
        const response = await fetch(`${url}/user/${formatId}/average-sessions`)
        userData = await response.json()
      } catch (err) {
        console.log('===== fetch user data error =====', err)
      }
      break
    case 'performance':
      try {
        const response = await fetch(`${url}/user/${formatId}/performance`)
        userData = await response.json()
      } catch (err) {
        console.log('===== fetch user data error =====', err)
      }
      break
    default:
      console.log('les données ne sont pas accessibles')
      break
  }
  return userData.data
}

export { GetAllUsers, GetUserDatasMocked, GetUserDatas }
