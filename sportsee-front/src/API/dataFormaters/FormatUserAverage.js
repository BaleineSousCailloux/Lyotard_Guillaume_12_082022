export default class FormatUserAverage {
  constructor(datas) {
    this.id = datas.userId
    this.sessions = datas.sessions
  }

  formatForLineChart() {
    return this.sessions.map((item) => ({
      type: this.numberToDay(item.day),
      result: item.sessionLength,
    }))
  }

  numberToDay(day) {
    let change = ''
    switch (day) {
      case 1:
        change = 'L'
        break
      case 2:
        change = 'M'
        break
      case 3:
        change = 'M'
        break
      case 4:
        change = 'J'
        break
      case 5:
        change = 'V'
        break
      case 6:
        change = 'S'
        break
      case 7:
        change = 'D'
        break
      default:
        console.log('problème lors de la modification des jours')
        break
    }
    return change
  }
}
