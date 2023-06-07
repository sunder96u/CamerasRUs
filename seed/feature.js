const db = require ('../db')
const { Feature,Model } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {
    const canonOne = await Model.findById("6480a9c25e8440be7c42865b")
    const canonTwo = await Model.findById("6480a9c25e8440be7c42865c")
    const canonThree = await Model.findById("6480a9c25e8440be7c42865d")
    const nikonOne = await Model.findById("6480a9c25e8440be7c42865e")
    const nikonTwo = await Model.findById("6480a9c25e8440be7c42865f")
    const nikonThree = await Model.findById("6480a9c25e8440be7c428660")
    const sonyOne = await Model.findById("6480a9c25e8440be7c428661")
    const sonyTwo = await Model.findById("6480a9c25e8440be7c428662")
    const sonyThree = await Model.findById("6480a9c25e8440be7c428663")


    const feature = [
        {
        resolution: '4K video, 24.1 Megapixel',
        sensorType: 'CMOS sensor',
        dimensions: 'Approx. 5.16 x 4.04 x 3.00 in. (131.0 x 102.6 x 76.2mm)',
        weight: 'Approx. 16.61 oz. / 471g (body only)',
        shutterSpeed: '1/4000 to 30 sec., bulb',
        Connectivity: 'Wi-Fi',         
        modelName: canonOne._id
        },
        {
        resolution: '4K video, 30.4 Megapixel',
        sensorType: 'CMOS sensor',
        dimensions: 'Approx. 5.93 x 4.58 x 2.99 in. (150.7 x 116.4 x 75.9mm)',
        weight: 'Approx. 31.39 oz. / 890g',
        shutterSpeed: '1/8000 to 30 sec., bulb',
        connectivity: 'Wi-Fi',          
        modelName: canonTwo._id
        },
        {
        resolution: '4k video, 20.1 Megapixel',
        sensorType: 'CMOS sensor',
        dimensions: 'Approx. 6.22 x 6.60 x 3.25 in. / 158.0 x 167.6 x 82.6mm',
        weight: 'Approx. 44.09 oz. / 1250g (Body only)',
        shutterSpeed: '1/8000 to 30 sec., bulb',
        connectivity: 'Wifi, Bluetooth, GPS',       
        modelName: canonThree._id
        },
        {
        resolution: '21.33 Megapixels',
        sensorType: 'CMOS sensor',
        dimensions: 'Approx: 6.3 x 6.4s x 3.62 in (160 x 163mm)',
        weight: '2.79 lb / 1270 g (body only) 44.64 oz',
        shutterSpeed: '1/8000 to 90 seconds',
        connectivity: 'Wi-Fi, Bluetooth',
        modelName: nikonOne._id
        },
        {
        resolution: '24.7 Megapixel',
        sensorType: 'CMOS sensor',
        dimensions: 'Approx: 5.6 x 4.5 x 3.2 in (141 x 113 x 82mm)',
        weight: '1.87 lb / 850g(body only) 29.92oz',
        shutterSpeed: '1/4000 to 30 seconds',
        connectivity: 'Wifi (adapter Required)',
        modelName: nikonTwo._id
        },
        {
        resolution: '46.89 Megapixel',
        sensorType: 'CMOS sensor',
        dimensions: '5.7 x 4.9 x 3.1 in (146 x 124 x 78.5mm)',
        weight: '2.01 lb / 915g 32.16oz',
        shutterSpeed: '1/8000 to 30 seconds',
        connectivity: 'Wi-Fi, Bluetooth',
        modelName: nikonThree._id
        },
        {
        resolution: '25 MegaPixels',
        sensorType: 'CMOS sensor',
        dimensions: '4.5 x 2.5 x 1.8 (115.2 x 64.2 x 44.8mm)',
        weight: '12.1 oz / 343g (body)',
        shutterSpeed: '1/4000 to 30 seconds',
        connectivity: 'Wi-Fi, Bluetooth',
        modelName: sonyOne._id
        },
        {
        resolution: '4k video, 24.2MP',
        sensorType: 'CMOS sensor',
        dimensions: '4.9 x 2.8 x 2.4" / 124 x 71.1 x 59.7 mm',
        weight: '1.1 lb / 509g 17.6oz',
        shutterSpeed: '1/4000 to 30 Seconds',
        connectivity: 'Wi-Fi, Bluetooth',
        modelName: sonyTwo._id
        },
        {
        resolution: '12.9 Megapixles',
        sensorType: 'CMOS sensor',
        dimensions: '4.8 x 2.8 x 2.1 (121 x 71.9 x 54.3mm)',
        weight: '14.1 oz / 399g (body only)',
        shutterSpeed: '1/8000 to 30 seconds',
        connectivity: 'Wi-Fi, Bluetooth',
        modelName: sonyThree._id
        }

    ]

  await Feature.insertMany(feature)
  console.log('Created feature')
console.log(canonOne)
}
const run = async () => {
  await main()
  db.close()
}

run()