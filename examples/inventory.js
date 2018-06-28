const TradeInterface = require('../index.js')
const trade = new TradeInterface(process.env.apikey)

async function getInventory(steam_id) {
	try {
		const res = await trade.ITrade.GetUserInventoryFromSteamId({ steam_id, app_id: 1 })

		console.log(res)
	} catch(err) {
		console.log(err)
	}
}

getInventory(process.env.steamid)