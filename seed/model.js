const db = require ('../db')
const { Brand,Model } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {
    const canon = await Brand.findOne({brand: 'canon'})
    const nikon = await Brand.findOne({brand: 'nikon'})
    const sony = await Brand.findOne({brand: 'sony'})
 
    const model = [
        {
        image:"https://s7d1.scene7.com/is/image/canon/3924C001_eos-rebel-t8i-(body-only)_primary?fmt=webp-alpha&wid=800",
        brandName: canon._id,
        model: 'EOS Rebel T8i',
        price: 749.99,           
        },
        {
        image:"https://s7d1.scene7.com/is/image/canon/1483C002_eos-5d-mark-iv_1NEW?fmt=webp-alpha&wid=800",
        brandName: canon._id,
        model:'EOS 5D Mark IV',
        price: 2499.00,           
        },
        {
        image:"https://s7d1.scene7.com/is/image/canon/3829C019_primary?fmt=webp-alpha&wid=800",
        brandName: canon._id,
        model: 'EOS-1D X Mark III',
        price: 6499.00,          
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d6_dslr_camera_body_1581510285_1515330.jpg",
        brandName: nikon._id,
        model: 'Nikon D6 DSLR',
        price: 6496.95,
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d_610_digital_slr_body_1381189748_1008264.jpg",
        brandName: nikon._id,
        model: 'Nikon D610 DSLR',
        price: 1099.00,
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d850_dslr_camera_body_1503543023_1351688.jpg",
        brandName: nikon._id,
        model: 'Nikon D850 DSLR',
        price: 2496.95,
        },
        {
        image:"image: https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_alpha_a7c_mirrorless_digital_1600118443_1592776.jpg",
        brandName: sony._id,
        model: 'Sony a7C Mirrorless',
        price: 1598.00,
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_zv_e10_mirrorless_camera_with_1627386359_1655301.jpg",
        brandName: sony._id,
        model: 'Sony ZV-E10 Mirrorless',
        price: 798.00,
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_zv_e1_mirrorless_camera_black_1680084933_1759472.jpg",
        brandName: sony._id,
        model: 'Sony ZV-E1 Mirrorless ',
        price: 2198.00,
        }

    ]
    
    await Model.insertMany(model)
    console.log('created model')
}

const run = async() => {
    await main()
    db.close()
}
run()
