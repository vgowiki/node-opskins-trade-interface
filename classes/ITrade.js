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

			return res
		} catch(err) {
			throw err
		}
	}
}

module.exports = ITrade