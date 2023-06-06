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