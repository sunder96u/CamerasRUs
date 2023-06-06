const { Feature } = require('../models')

const findFeatures = async (req, res) => {
    try{
        const features = await Feature.find()
        if(!features) throw Error ('Features not found')
        res.status(200).json(features)
    } catch (e) {
        console.log(e)
        res.status(500).send('Features not found')
    }
}

const findFeaturesById = async (req, res) => {
    try {
        const { id } = req.params
        const feature = await Feature.findById(id)
        if(!feature) throw Error ("Feature not found")
        res.status(200).json(feature)
    } catch (e) {
        console.log(e)
        res.status(500).send('Feature not found')
    }
}

const findFeaturesByBrand = async (req, res) => {
    try {
        const { modelName } = req.params
        const feature = await Feature.find({modelName: modelName})
        if(!feature) throw Error ('Feature not found')
        res.status(200).json(feature)
    } catch (e) {
        console.log(e)
        res.status(500).send('Feature not Found')
    }
}

const createFeatures = async (req, res) => {
    try {
        const feature = await new Feature(req.query)
        await feature.save()
        if(!feature) throw Error('Feature not created')
        return res.status(201).json(feature)
    } catch (e) {
        console.log(e)
        res.status(500).send('Feature not created')
    }
}

const updateFeature = async (req, res) => {
    try {
        const feature = await Feature.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!feature) throw Error('Feature not updated')
        res.status(201).json(feature)
    } catch (e) {
        console.log(e)
        res.status(500).send('Feature not updated')
    }
}

const deleteFeature = async (req, res) => {
    try {
        const { id } = req.params
        const feature = await Feature.findByIdAndDelete(id)
        if(!feature) throw Error('Feature not deleted')
        res.status(200).json(feature)
    } catch (e) {
        console.log(e)
        res.status(500).send('Feature not deleted')
    }
}

module.exports = {
    findFeatures,
    findFeaturesById,
    findFeaturesByBrand,
    createFeatures,
    updateFeature,
    deleteFeature
}