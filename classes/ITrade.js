const Collection = require('./collection.js')

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
				let array = [].concat(res.response[this.schema[key].recursive_array])
				for(let i = 2; i < res.total_pages + 1; i++) {
					params.page = i

					const rres = await this._exec(key, params, this.schema[key].method)
					array = array.concat(rres.response[this.schema[key].recursive_array])
				}

				res.response[this.schema[key].recursive_array] = array
			}

			return res
		} catch(err) {
			throw err
		}
	}
}

module.exports = ITrade