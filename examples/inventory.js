const TradeInterface = require('../index.js')
const trade = new TradeInterface(process.env.apikey)

async function getInventory() {
	try {
		const res = await trade.IUser.GetInventory({ app_id: 1, RECURSIVE: true })

		console.log(res)
	} catch(err) {
		console.log(err)
	}
}

getInventory()