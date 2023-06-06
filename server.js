const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001 
const AppRouter = require('./routes/appRouter')
const landingPage = require('./controllers/brandController')

const app = express()

app.get('/', landingPage.findBrands)
app.use('/api', AppRouter)

app.listen(PORT, () => {
      console.log(`Express servers on port: ${PORT}`)})