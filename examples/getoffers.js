const TradeInterface = require('../index.js')
const trade = new TradeInterface(process.env.apikey)

async function getOffers() {
  try {
    const res = await trade.ITrade.GetOffers({ type: 'sent' })

    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

getOffers()