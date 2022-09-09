/**
 * Class to format activity data
 */
class FormatUserActivity {
  /**
   *
   * @param {Array} datas raw
   */
  constructor(datas) {
    this.id = datas.userId
    this.sessions = datas.sessions
  }

  /**
   * @property {function} formatActivity map and format datas
   * @returns formated array with real day's number
   */
  formatActivity() {
    const formatDate = (date) => {
      let maDate = new Date(date)
      let myDay = maDate.getDate()
      return myDay
    }

    return this.sessions.map((item) => ({
      day: formatDate(item.day).toString(),
      kilogram: item.kilogram,
      calories: item.calories,
    }))
  }
}

export default FormatUserActivity
