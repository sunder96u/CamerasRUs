const { Model } = require('../models')

const findModels = async (req, res) => {
      try{
          const models = await Model.find()
          if(!models) throw Error ('Model not found')
          res.status(200).json(models)
      } catch (e) {
          console.log(e)
          res.status(500).send('Model not found')
      }
}

const findModelById = async (req, res) => {
    try {
        const { id } = req.params
        const model = await Model.findById(id)
        if(!model) throw Error ('Model not found')
        res.status(200).json(model)
    } catch (e) {
        console.log(e)
        res.status(500).send('Model not found')
    }
}

// const findModelByModel = async (req, res) => {
//     console.log(req.params)
//     try {
//         const modelName = req.params.model
//         const model = await Model.find({ model: `${modelName}`})
//         if(!feature) throw Error ("Model not found")
//         res.status(200).json(model)
//     } catch (e) {
//         console.log(e)
//         res.status(500).send('Model not found')
//     }
// }

const createModel = async (req, res) => {
    try {
        const model = await new Model(req.query)
        await model.save()
        if(!model) throw Error('Model not created')
        return res.status(201).json(model)
    } catch (e) {
        console.log(e)
        res.status(500).send("Model not created")
    }
}

const updateModel = async (req, res) => {
    try {
        const model = await Model.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!model) throw Error('Model not updated')
        res.status(201).json(model)
    } catch (e) {
        console.log(e)
        res.status(500).send('Model not updated')
    }
}

const deleteModel = async (req, res) => {
    try { 
        const { id } = req.params
        const model = await Model.findByIdAndDelete(id)
        if(!model) throw Error('Model not deleted')
        res.status(200).json(model)
    } catch (e) {
        console.log(e)
        res.status(500).send('Model not deleted')
    }
}

module.exports = {
    findModels,
    findModelById,
     // findModelByModel, => not functioning yet
    createModel,
    updateModel,
    deleteModel
}