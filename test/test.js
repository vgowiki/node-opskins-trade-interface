const { expect } = require('chai')
const schema = require('../resources/schema.js')
const TradeInterface = require('../index.js')
const trade = new TradeInterface(process.env.apikey)

describe('ITest', async() => {
  it('Test', async() => {
    const res = await trade.ITest.Test()

    expect(res).to.have.all.keys(['status', 'time'])
    expect(res.status).to.equal(1)
  })
  it('TestAuthed', async() => {
    const res = await trade.ITest.TestAuthed()

    expect(res).to.have.all.keys(['status', 'time', 'response'])
    expect(res.status).to.equal(1)
    expect(res.response).to.have.all.keys('uid')
  })
  it('TestBody', async() => {
    const res = await trade.ITest.TestBody({ test: 'complete', interface: 'working' })

    expect(res).to.have.all.keys(['status', 'time', 'response'])
    expect(res.status).to.equal(1)
    expect(res.response).to.have.all.keys(['key', 'test', 'interface'])
    expect(res.response.key).to.equal(process.env.apikey)
    expect(res.response.test).to.equal('complete')
    expect(res.response.interface).to.equal('working')
  })
})

describe('Schema', () => {
  it('structure', () => {
    expect(schema).to.have.all.keys(['ICase', 'ICaseSite', 'IEthereum', 'IItem', 'ITest', 'ITrade', 'IUser'])
    
    /* checking each request in each collection */
    for(let key1 in schema) {
      for(let key2 in schema[key1]) {
        const m = schema[key1][key2]

        expect(m).to.have.all.keys(['method', 'params'])

        expect(m.method).to.be.oneOf(['GET', 'POST'])
        
        /* checking parameters validation fields */
        for(let key3 in m.params) {
          const p = m.params[key3]

          expect(p).to.have.all.keys(['required', 'regex'])
          expect(typeof p.required).to.equal('boolean')
          expect(p.regex instanceof RegExp).to.equal(true)
        }
      }
    }
  })
  it('method assign', () => {
    expect(typeof trade.ITest.Test).to.equal('function')
    expect(typeof trade.ITest.TestAuthed).to.equal('function')
    expect(typeof trade.ITest.TestBody).to.equal('function')
  })
})