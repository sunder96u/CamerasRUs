const db = require ('../db')
const { Brand,Model } = require('../models')

db.on('error', console.error.bind(console,'error:'))

const main = async () => {
    const canon = await brands.find({name: 'canon'})
    const nikon = await brands.find({name: 'nikon'})
    const sony = await brands.find({name: 'sony'})

    const model = [
        {
        image:"https://s7d1.scene7.com/is/image/canon/3924C001_eos-rebel-t8i-(body-only)_primary?fmt=webp-alpha&wid=800",
        brandName: 'Canon',
        model: 'EOS Rebel T8i',
        price: '$749.99',           
        model_id: canon[0]._id
        },
        {
        image:"https://s7d1.scene7.com/is/image/canon/1483C002_eos-5d-mark-iv_1NEW?fmt=webp-alpha&wid=800",
        brandName: 'Canon',
        model:'EOS 5D Mark IV',
        price: '$2,499.00',           
        model_id: canon[0]._id
        },
        {
        image:"https://s7d1.scene7.com/is/image/canon/3829C019_primary?fmt=webp-alpha&wid=800",
        brandName: 'Canon',
        model: 'EOS-1D X Mark III',
        price: '$6,499.00',          
        model_id: canon[0]._id
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d6_dslr_camera_body_1581510285_1515330.jpg",
        brandName: 'Nikon',
        model: 'Nikon D6 DSLR',
        price: '$6,496.95',
        brands_id: nikon[0]._id
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d_610_digital_slr_body_1381189748_1008264.jpg",
        brandName: 'Nikon'
        model: 'Nikon D610 DSLR',
        price: '$1,099.00',
        brands_id: nikon[0]._id
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/nikon_d850_dslr_camera_body_1503543023_1351688.jpg",
        brandName: 'Nikon',
        model: 'Nikon D850 DSLR',
        price: '$2,496.95',
        brands_id: nikon[0]._id
        },
        {
        image:"image: https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_alpha_a7c_mirrorless_digital_1600118443_1592776.jpg",
        brandName: 'Sony',
        model: 'Sony a7C Mirrorless',
        price: '$1,598.00',
        brands_id: sony[0]._id
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_zv_e10_mirrorless_camera_with_1627386359_1655301.jpg",
        brandName: 'Sony',
        model: 'Sony ZV-E10 Mirrorless',
        price: '$798.00',
        brands_id: sony[0]._id
        },
        {
        image:"https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/sony_zv_e1_mirrorless_camera_black_1680084933_1759472.jpg",
        brandName: 'Sony',
        model: 'Sony ZV-E1 Mirrorless ',
        price: '$2,198.00',
        brands_id: sony[0]._id
        }

    ]
    await Model.insertMany(model)
    console.log('created model')
}

const run = async() => {
    await main()
    db close()
}
run()
