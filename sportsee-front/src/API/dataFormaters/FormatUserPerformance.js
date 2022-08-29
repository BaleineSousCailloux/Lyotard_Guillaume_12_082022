export default class FormatUserPerformance {
    constructor(datas) {
      this.id = datas.userId
      this.kind = datas.kind
      this.data = datas.data
      // this.type = this.englishToFrench(this.kind)
    }

    // englishToFrench(kind) {
    //   kind[0].value = 'Cardio'
    //   kind[1].value = 'Energie'
    //   kind[2].value = 'Endurance'
    //   kind[3].value = 'Force'
    //   kind[4].value = 'Vitesse'
    //   kind[5].value = 'Intensité'

    //   return kind
    // }
  }