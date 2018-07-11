# opskins-trade-interface
NodeJS interface for interaction with trade.opskins.com API

# Contents
- [Trade Opskins API Documentation](https://github.com/OPSkins/trade-opskins-api)
- [Installation](#install)
- [Usage](#usage)
- [Methods](#methods)
- [Module specific parameters](#module-specific-parameters)
- [Recommended use](#recommended-use)


# Install
Clone this repo and include **index.js** or install via npm:
```
npm install opskins-trade-interface
```

# Usage
```javascript
const TradeInterface = require('opskins-trade-interface')

const interface = new TradeInterface(APIKEY)

// Gets apikey user inventory
async function getInventory() {
  try {
    // RECURSIVE: true - Gets all pages of inventory by requesting it multiple times
    const res = await trade.IUser.GetInventory({ app_id: 1, RECURSIVE: true })

    console.log(res)
  } catch(err) {
    console.log(err)
  }
}

getInventory()
```

# Methods
All the methods use same parameters and produce same result as described in [Trade Opskins API Documentation](https://github.com/OPSkins/trade-opskins-api)

Calling example method:
```javascript
const res = await trade.IUser.GetInventory({ app_id: 1, RECURSIVE: true })
// IUser - collection of methods from docs
// GetInventory - one of the methods of this collection
// app_id - one of the method's parameters
// RECURSIVE - one of the module's specific parameters

console.log(res)
/* =>
{
  "status": 1,
  "time": 1528135996,
  "response": {
    "total": 123,
    "items": [...],
    "sort_parameters": {...}
  }
}
```

# Module specific parameters
There are several parameters that are added in addition to all other documented parameters all of which are optional

- **RECURSIVE** (boolean, false by default) - if true, gets all pages of response of some methods. Works for IUser.GetInventory, ITrade.GetOffers, ITrade.GetUserInventory, ITrade.GetUserInventoryFromSteamId
- **NOVALIDATION** (boolean, false by default) - if true, skips parameters validation. Can be usefull if correct parameters unexpectadly rejected by the module

# Recommended use
Its recommended to use this module through [opskins-trade-manager](https://github.com/feed4rz/node-opskins-trade-manager) in order to enhance development experience by having auto polling with events, class based outputs and more