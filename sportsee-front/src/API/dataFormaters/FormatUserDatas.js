export default class FormatUserDatas {
  constructor(datas) {
    this.id = datas.id
    this.infos = datas.userInfos
    this.userFirstName = this.infos.firstName
    this.keyData = datas.keyData
    this.todayScore = datas.todayScore || datas.score
  }

  formatScore() {
    return this.todayScore * 100
  }
  nutrimentsCount() {
    const calToKcal = (this.keyData.calorieCount / 1000).toFixed(3)
    const calLegend = calToKcal.toString().replace('.', ',') + 'kCal'
    const gramLegend = (numb) => {
      return numb.toString() + 'g'
    }
    const arrayOfNutriments = [
      calLegend,
      gramLegend(this.keyData.proteinCount),
      gramLegend(this.keyData.carbohydrateCount),
      gramLegend(this.keyData.lipidCount),
    ]
    return arrayOfNutriments
  }
  formatNutriments() {
    const myArray = Object.keys(this.keyData)
    const myArrayTrad = myArray.map((item) => this.englishToFrench(item))
    return myArrayTrad
  }
  englishToFrench(item) {
    let trad = ''
    switch (item) {
      case 'calorieCount':
        trad = 'Calories'
        break
      case 'proteinCount':
        trad = 'Protéines'
        break
      case 'carbohydrateCount':
        trad = 'Glucides'
        break
      case 'lipidCount':
        trad = 'Lipides'
        break
      default:
        console.log('problème de traduction')
        break
    }
    return trad
  }
}
