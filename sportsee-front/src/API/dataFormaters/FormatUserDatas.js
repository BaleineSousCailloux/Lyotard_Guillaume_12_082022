export default class FormatUserDatas {
  constructor(datas) {
    this.id = datas.id
    this.infos = datas.userInfos
    this.userFirstName = this.infos.firstName
    this.keyData = datas.keyData
    this.todayScore = datas.todayScore || datas.score
    this.score = this.formatScore(this.todayScore)
  }

  formatScore(percentage) {
    const formatScore = percentage * 100
    return  formatScore
  }
}