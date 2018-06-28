const TradeInterface = require('../index.js')
const trade = new TradeInterface(process.env.apikey)

async function getProfile() {
	try {
		const res = await trade.IUser.GetProfile()

		console.log(res)
	} catch(err) {
		console.log(err)
	}
}

getProfile()