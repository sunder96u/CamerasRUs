const { Brand } = require('../models')

const findBrands = async (req, res) => {
    try{
        const brands = await Brand.find()
        if(!brands) throw Error ('Brand not found')
        res.status(200).json(brands)
    } catch (e) {
        console.log(e)
        res.status(500).send('Brand not found')
    }
}

const findBrandById = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findById(id)
        if(!brand) throw Error ('Brand not found')
        res.status(200).json(brand)
    } catch (e) {
        console.log(e)
        res.status(500).send('Brand not found')
    }
}

const findBrandByName = async (req, res) => {
    try {
        const brand = await Brand.find({brand: req.params.name})
        if(!brand) throw Error ('Brand not found')
        res.status(200).json(brand)
    } catch (e) {
        console.log(e)
        res.status(500).send
    }
}

const createBrand = async (req, res) => {
    console.log(req.query)

    try {
        const brand = await new Brand(req.query)
        await brand.save()
        if(!brand) throw Error('Brand not created')
        return res.status(201).json(brand)
    } catch (e) {
        console.log(e)
        res.status(500).send('Brand not created')
    }
}

const updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!brand) throw Error('Brand not updated')
        res.status(201).json(brand)
    } catch (e) {
        console.log(e)
        res.status(500).send('Brand not updated')
    }
}

const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params
        const brand = await Brand.findByIdAndDelete(id)
        if(!brand) throw Error('Brand not deleted')
        res.status(200).json(brand)
    } catch (e) {
        console.log(e)
        res.status(500).send('Brand not deleted')
    }
}

module.exports = {
    findBrands,
    findBrandById,
    findBrandByName,
    createBrand,
    updateBrand,
    deleteBrand
}