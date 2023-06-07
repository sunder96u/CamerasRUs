const db = require ('../db')
const { brands } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const brand = [
    {
     
      brands_id: canon[0]._id
    },
    {
     
      brands_id: nikon[0]._id
    },
    {
    
      brands_id: sony[0]._id
    }
  ]

  await brand.insertMany(brand)
  console.log('Created')
}
const run = async () => {
  await main()
  db.close()
}

run()