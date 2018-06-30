/* Dependencies */
const axios = require('axios')

/* Classes */
const ITrade = require('./ITrade.js')
const IUser = require('./IUser.js')
const ITest = require('./ITest.js')
const IItem = require('./IItem.js')
const IEthereum = require('./IEthereum.js')
const ICaseSite = require('./ICaseSite.js')
const ICase = require('./ICase.js')

/* Errors */
const Request = require('../errors/request.js')

class TradeInterface {
  constructor(apikey) {
    this._apikey = apikey

    this.ITrade = new ITrade(this)
    this.IUser = new IUser(this)
    this.ITest = new ITest(this)
    this.IItem = new IItem(this)
    this.IEthereum = new IEthereum(this)
    this.ICaseSite = new ICaseSite(this)
    this.ICase = new ICase(this)
  }

  async _req(url, method = 'GET', data = {}) {
    const baseURL = 'https://api-trade.opskins.com'

    if(method == 'GET') {
      url += `?key=${this._apikey}`
      for(let key in data) {
        url += `&${key}=${data[key]}`
      }

      data = null
    } else if(method == 'POST') {
      data.key = this._apikey
    }

    const validateStatus = status => {
      return true
    }

    try {
      const res = await axios({ url, method, baseURL, data, validateStatus })

      if(res.data.status != '1') throw new Request(res.data.message)

      return res.data
    } catch(err) {
      throw err
    }
  }
}

module.exports = TradeInterface