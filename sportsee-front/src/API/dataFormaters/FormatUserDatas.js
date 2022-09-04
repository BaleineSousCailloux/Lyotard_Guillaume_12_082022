export default class FormatUserDatas {
  constructor(datas) {
    this.id = datas.id
    this.infos = datas.userInfos
    this.userFirstName = this.infos.firstName
    this.nutriments = datas.keyData
    // this.cal = this.keyData.calorieCount
    // this.prot = this.keyData.proteinCount
    // this.glu = this.keyData.carbohydrateCount
    // this.lip = this.keyData.lipidCount
    this.todayScore = datas.todayScore || datas.score
  }

  formatScore() {
    return this.todayScore * 100
  }
  nutrimentsCount() {
    const calToKcal = (this.nutriments.calorieCount / 1000).toFixed(3)
    const calLegend = calToKcal.toString() + 'kCal'
    const gramLegend = (numb) => {
      return numb.toString() + 'g'
    }
    const arrayOfNutriments = [
      calLegend,
      gramLegend(this.nutriments.proteinCount),
      gramLegend(this.nutriments.carbohydrateCount),
      gramLegend(this.nutriments.lipidCount),
    ]
    return arrayOfNutriments
  }
}
