const Collection = require('./collection.js')

class ICaseSite extends Collection {
  constructor(api) {
    super(api)
  }
}

const schema = Collection.getSchema().ICaseSite

for(let key in schema) {
  ICaseSite.prototype[key] = async function(params = {}) {
    try {
      this._validate(params, this.schema[key].params)

      const res = await this._exec(key, params, this.schema[key].method)

      return res
    } catch(err) {
      throw err
    }
  }
}

module.exports = ICaseSite