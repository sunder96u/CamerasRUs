
const nikon = document.getElementById('nikon')
const sony = document.getElementById('sony')
const canon = document.getElementById('canon')
const cardContainer = document.getElementById('brandCardContainer')
const featuresCardContainer = document.getElementById('featuresCardContainer')

const currentBrand = {}
const currentModel = {}


const brandCards = async (brand) => {
      brandCardContainer.innerHTML = ''
      brand.forEach(product => {
            
            // Card
            const card = document.createElement('div')
            // Image 
            const imageElement = document.createElement('img')
            imageElement.src = `${currentBrand.data.brandLogo}`
            card.appendChild(imageElement)
            // Brand Name
            const brandNameElement = document.createElement('h3')
            brandNameElement.textContent = `${currentBrand.data.brand}`
            card.appendChild(brandNameElement)
      })

      for(let i = 0; i < currentModel.data.length; i++) {
            // Model
            const modelElement = document.createElement('p')
            modelElement.textContent = `Model: ${currentModel.data[i].model}`
            card.appendChild(modelElement)
            // Price    
            const priceElement = document.createElement('p')
            priceElement.textContent = `Price: $${currentModel.data[i].model}`
            card.appendChild(priceElement)
            // Add To Cart Button
            const addToCartButton = document.createElement('button')
            addToCartButton.textContent = 'Add to Cart'
            // Add To Cart Functionality
            addToCartButton.addEventListener('click', async() => {
                  const item = await axios.put(`http://localhost:3001/api/cart/${currentMode.data[i].id}`)
            })
      
            card.appendChild(addToCartButton)
            // Add card to the desired place
      }
}


const featuresCards = async (feature) => {

      featuresCardContainer.innerHTML = ''

      featuresResponse = await axios.get('http://localhost:3001/api/features/:id')

      feature.forEach(item => {
        // Card
        const card = document.createElement('div')
    
        // Image 
        const imageElement = document.createElement('img')
        imageElement.src = `${currentModel.data.image}`
        card.appendChild(imageElement)
    
        // Brand Name
        const brandNameElement = document.createElement('h3')
        brandNameElement.textContent = `${currentModel.data.brandName}`
        card.appendChild(brandNameElement)
    
        // Model
        const modelElement = document.createElement('p')
        modelElement.textContent = `Model: ${currentModel.data.model}`
        card.appendChild(modelElement)
    
        // Price
        const priceElement = document.createElement('p')
        priceElement.textContent = `Price: ${currentModel.data.price}`
        card.appendChild(priceElement)
    
        // Features
        const featuresElement = document.createElement('ul')
        item.features.forEach(feature => {
          const featureItem = document.createElement('li')
          featureItem.textContent = `${featuresResponse.data}`
          featuresElement.appendChild(featureItem)
        })
        card.appendChild(featuresElement)
    
        // Append the card to the desired container
        document.body.appendChild(card) 
      })
}
    

    
// Nikon 
nikon.addEventListener('click', async () => {
      brandNikon = await axios.get('http://localhost:3001/api/nikon')
      currentBrand = brandNikon
      
      modelNikon = await axios.get('http://localhost:3001/api/modelNikon')
      currentModel = modelNikon
})

// Sony 
sony.addEventListener('click', async () => {
      brandSony = await axios.get('http://localhost:3001/sony')
      currentBrand = brandSony

      modelSony = await axios.get('http://localhost:3001/api/modelSony')
      currentModel = modelSony
})

// Canon 
canon.addEventListener('click', async () => {
      brandCanon = await axios.get('http://localhost:3001/canon')
      currentBrand = brandCanon

      modelCanon = await axios.get('http://localhost:3001/api/modelCanon')
      currentModel = modelCanon
})


