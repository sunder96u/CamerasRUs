const db = require ('../db')
const { Brand } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {

    const brand = [
        {
        brand:'canon',
        brandLogo:'../client/images/Canon-Logo.jpg',
        },
        {
        brand:'nikon',
        brandLogo:'../client/images/Nikon-Logo.jpg',
        },
        {
        brand:'sony',
        brandLogo:'../client/images/Sony-Logo.jpg',
        }
    ]

  await Brand.insertMany(brand)
  console.log('Created brand')
}
const run = async () => {
  await main()
  db.close()
}

run()