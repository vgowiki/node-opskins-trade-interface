const Collection = require('./collection.js')

class ITest extends Collection {
	constructor(api) {
		super(api)
	}
}

const schema = Collection.getSchema().ITest

for(let key in schema) {
	ITest.prototype[key] = async function(params = {}) {
		try {
			this._validate(params, this.schema[key].params)

			const res = await this._exec(key, params, this.schema[key].method)

			return res
		} catch(err) {
			throw err
		}
	}
}

module.exports = ITest