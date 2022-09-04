export default class FormatUserPerformance {
  constructor(datas) {
    this.id = datas.userId
    this.kind = datas.kind
    this.data = datas.data
  }
  formatForRadar() {
    return this.data.map((item) => ({
      type: this.englishToFrench(this.kind[item.kind]),
      result: item.value,
    }))
  }

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
