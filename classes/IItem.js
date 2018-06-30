const Collection = require('./collection.js')

class IItem extends Collection {
  constructor(api) {
    super(api)
  }
}

const schema = Collection.getSchema().IItem

for(let key in schema) {
  IItem.prototype[key] = async function(params = {}) {
    try {
      this._validate(params, this.schema[key].params)

      const res = await this._exec(key, params, this.schema[key].method)

      return res
    } catch(err) {
      throw err
    }
  }
}

module.exports = IItem