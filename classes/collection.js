/* Errors */
const Invalid = require('../errors/invalid.js')
const Missing = require('../errors/missing.js')

const schema = require('../resources/schema.js')

class Collection {
  static getSchema() {
    return schema
  }

  constructor(api) {
    this.api = api
    this.schema = schema[this.constructor.name]
  }

  async _exec(method, json = {}, req_method = 'GET', version = 'v1') {
    const base = this.constructor.name
    const url = `${base}/${method}/${version}`

    try {
      const res = await this.api._req(url, req_method, json)

      return res
    } catch(err) {
      throw err
    }
  }

  _validate(params, schema) {
    if(params.NOVALIDATION) return true

    const missing = []
    const invalid = []

    for(let key in schema) {
      if(typeof params[key] == 'undefined') continue
      if(params[key] === null) continue
      if(typeof params[key] == 'number' || typeof params[key] == 'boolean') params[key] = params[key].toString()
      if(schema[key].required && Object.keys(params).indexOf(key) == -1) {
        missing.push(key)
        continue
      }
      if(Object.keys(params).indexOf(key) > -1) {
        if(!(params[key].match(schema[key].regex) ? true : false)) {
          invalid.push(key)
        }
      }
    }

    if(missing.length) throw new Missing(missing)
    if(invalid.length) throw new Invalid(invalid)

    return true
  }
}

module.exports = Collection