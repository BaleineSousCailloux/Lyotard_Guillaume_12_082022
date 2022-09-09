/**
 * Class to format main user data
 */
class FormatUserDatas {
  /**
   *
   * @param {Object} datas raw
   */
  constructor(datas) {
    this.id = datas.id
    this.infos = datas.userInfos
    this.userFirstName = this.infos.firstName
    this.keyData = datas.keyData
    this.todayScore = datas.todayScore || datas.score
  }

  /**
   * @property {function} formatScore
   * @returns formated score
   */
  formatScore() {
    return this.todayScore * 100
  }

  /**
   * @property {function} nutrimentsCount get quantites
   * @returns Array formated quantities with unities
   */
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

  /**
   * @property {function} formatNutriments get Labels in french
   * @returns Array of french's labels
   */
  formatNutriments() {
    const myArray = Object.keys(this.keyData)
    const myArrayTrad = myArray.map((item) => this.englishToFrench(item))
    return myArrayTrad
  }

  /**
   * @property {function} englishToFrench traduction
   * @param {string} item nutriment
   * @returns french nutriment label
   */
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

export default FormatUserDatas
