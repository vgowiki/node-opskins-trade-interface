const Collection = require('./collection.js')
const pmap = require('p-map')

class ITrade extends Collection {
  constructor(api) {
    super(api)
  }
}

const schema = Collection.getSchema().ITrade

for(let key in schema) {
  ITrade.prototype[key] = async function(params = {}) {
    try {
      this._validate(params, this.schema[key].params)

      const res = await this._exec(key, params, this.schema[key].method)

      if(this.schema[key].params.page && params.RECURSIVE && res.total_pages > 1) {
        const { CONCURRENCY = 1 } = params

        const mapper = async (params_step) => {
          const rres = await this._exec(key, params_step, this.schema[key].method)

          return rres.response[this.schema[key].recursive_array]
        }

        let params_array = []
        for(let i = 2; i < res.total_pages + 1; i++) {
          params.page = i

          params_array.push({ ...params })
        }

        const array = await pmap(params_array, mapper, { concurrency: CONCURRENCY })

        res.response[this.schema[key].recursive_array] = res.response[this.schema[key].recursive_array].concat(...array)
      }

      return res
    } catch(err) {
      throw err
    }
  }
}

module.exports = ITrade