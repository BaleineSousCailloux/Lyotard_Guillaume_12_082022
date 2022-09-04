export default class FormatUserActivity {
  constructor(datas) {
    this.id = datas.userId
    this.sessions = datas.sessions
  }

  formatActivity() {
    return this.sessions.map((item) => ({
      day: (this.sessions.indexOf(item) + 1).toString(),
      kilogram: item.kilogram,
      calories: item.calories,
    }))
  }
}
