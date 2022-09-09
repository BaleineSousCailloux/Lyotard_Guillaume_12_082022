/**
 * Class to format performances data
 */
class FormatUserPerformance {
  /**
   *
   * @param {Array} datas raw
   */
  constructor(datas) {
    this.id = datas.userId
    this.kind = datas.kind
    this.data = datas.data
  }

  /**
   * @property {function} formatForRadar map 2 arrays in one and format datas
   * @returns formated array with label and value
   */
  formatForRadar() {
    return this.data.map((item) => ({
      type: this.englishToFrench(this.kind[item.kind]),
      result: item.value,
    }))
  }

  /**
   * @property {function} englishToFrench traduction
   * @param {array} kind array of labels
   * @returns french labels
   */
  englishToFrench(kind) {
    let trad = ''
    switch (kind) {
      case 'cardio':
        trad = 'Cardio'
        break
      case 'energy':
        trad = 'Energie'
        break
      case 'endurance':
        trad = 'Endurance'
        break
      case 'strength':
        trad = 'Force'
        break
      case 'speed':
        trad = 'Vitesse'
        break
      case 'intensity':
        trad = 'Intensité'
        break
      default:
        console.log('problème de traduction')
        break
    }
    return trad
  }
}

export default FormatUserPerformance
