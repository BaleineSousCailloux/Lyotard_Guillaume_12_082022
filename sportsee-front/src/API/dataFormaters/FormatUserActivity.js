export default class FormatUserActivity {
  constructor(datas) {
    this.id = datas.userId
    this.sessions = datas.sessions
  }

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
