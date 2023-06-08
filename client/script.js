const nikon = document.getElementById('nikon-button')
const sony = document.getElementById('sony-button')
const canon = document.getElementById('canon-button')
const cardContainer = document.getElementById('brandCardContainer')
const featuresCardContainer = document.getElementById('featuresCardContainer')
const brandInfo = document.querySelector('.brand-info')
const modal = document.getElementById('cartModal')
const cartButton = document.getElementById('cart-button')
const closeSpan = document.getElementsByClassName('close')[0]

let currentBrand = {}
let currentModel = {}
let featureCurrentModel = {}
let myCart = {}


const brandCards = async (brand) => {
      // Card
      const card = document.createElement('div')
      card.classList.add('brandContainer')
      brandInfo.innerHTML = ""

      for (let j = 0; j < currentBrand.data.length; j++) {
            // Image 
            const imageElement = document.createElement('img')
            imageElement.src = `${currentBrand.data[0].brandLogo}`
            const imageDiv = document.createElement('div')
            
            // Brand Name
            const brandNameElement = document.createElement('h3')
            const brandNameDiv = document.createElement('div')
            
            // Brand Info
            imageDiv.appendChild(imageElement)
            imageDiv.classList.add('imageDiv')
            card.appendChild(imageDiv)
            brandNameDiv.appendChild(brandNameElement)
            card.appendChild(brandNameDiv)
            brandInfo.appendChild(card)
      }

      for(let i = 0; i < currentModel.data.length; i++) {
            const newDiv = document.createElement('div')
            //Image
            const pic = document.createElement('img')
            pic.src = `${currentModel.data[i].image}`
            pic.classList.add('modelPic')
            const picDiv = document.createElement('div')

            // Model
            const modelElement = document.createTextNode(`Model: ${currentModel.data[i].model}`)
            const modelDiv = document.createElement('div')

            // Price    
            const priceElement = document.createTextNode(`Price: $${currentModel.data[i].price}`)
            const priceDiv = document.createElement('div')
            
            // Add To Cart Button
            const addToCartButton = document.createElement('button')
            addToCartButton.textContent = 'Add to Cart'
            const addToCartDiv = document.createElement('div')

            // Add To Cart Functionality
            addToCartButton.addEventListener('click', async() => {
                  const item = await axios.post(`http://localhost:3001/api/cart/${currentModel.data[i]._id}`)
                    
            })

            picDiv.appendChild(pic)
            modelDiv.appendChild(modelElement)
            priceDiv.appendChild(priceElement)
            addToCartDiv.appendChild(addToCartButton)

            newDiv.appendChild(picDiv)
            newDiv.appendChild(modelDiv)
            newDiv.appendChild(priceDiv)
            newDiv.appendChild(addToCartDiv)
            
            // card.appendChild(addToCartButton)
            // Add card to the desired place

            // View More Button
            const viewMoreButton = document.createElement('button')
            newDiv.append(viewMoreButton)
            card.appendChild(newDiv)
            viewMoreButton.textContent = 'View More'
            viewMoreButton.id = 'view-more'
            viewMoreButton.addEventListener('click', () => {
                  featureCurrentModel = currentModel.data[i]._id
                  featuresCards()
            })
      }
}


const featuresCards = async (feature) => {
      brandInfo.innerHTML = ""
      const card = document.createElement('div')
      card.classList.add('brandContainer')
      console.log(featureCurrentModel)
      featuresResponse = await axios.get(`http://localhost:3001/api/features/brand/${featureCurrentModel}`)
      myCurrentModel = await axios.get(`http://localhost:3001/api/models/${featureCurrentModel}`)
      console.log(`${myCurrentModel} -> currentModel info`)
      console.log(featuresResponse)

      const newDiv = document.createElement('div')
            //Image
            const pic = document.createElement('img')
            pic.classList.add('modelPic')
            pic.src = `${myCurrentModel.data.image}`
            // Model
            const modelElement = document.createTextNode(`Model: ${myCurrentModel.data.model}`)
            
            // Price    
            const priceElement = document.createTextNode(`Price: $${myCurrentModel.data.price}`)
            
            // Dimensions
            const dimensionsElement = document.createTextNode(`Dimensions: ${featuresResponse.data.dimensions}`)

            // Connectivity
            const connectivityElement = document.createTextNode(`Connectivity: ${featuresResponse.data.connectivity}`)

            // Shutterspeed 
            const shutterSpeedElement = document.createTextNode(`Shutter Speed: ${featuresResponse.data.shutterSpeed}`)

            // Sensor Type 
            const sensorTypeElement = document.createTextNode(`Sensor Type: ${featuresResponse.data.sensorType}`)

            // Resolution 
            const resolutionElement = document.createTextNode(`Resolution: ${featuresResponse.data.resolution}`)

            // Weight
            const weightElement = document.createTextNode(`Weight: ${featuresResponse.data.weight}`)

            // // Add To Cart Button
            const addToCartButton = document.createElement('button')
            addToCartButton.textContent = 'Add to Cart'
            // // Add To Cart Functionality
            addToCartButton.addEventListener('click', async() => {
                  const item = await axios.post(`http://localhost:3001/api/cart/${myCurrentModel.data._id}`)
                    
            })
            newDiv.appendChild(pic)
            newDiv.appendChild(modelElement)
            newDiv.appendChild(connectivityElement)
            newDiv.appendChild(shutterSpeedElement)
            newDiv.appendChild(sensorTypeElement)
            newDiv.appendChild(resolutionElement)
            newDiv.appendChild(dimensionsElement)
            newDiv.appendChild(weightElement)
            newDiv.appendChild(priceElement)
            newDiv.appendChild(addToCartButton)
            card.appendChild(newDiv)
            brandInfo.appendChild(card)

      // feature.forEach(item => {
      //   // Card
      //   const card = document.createElement('div')
    
      //   // Image 
      //   const imageElement = document.createElement('img')
      //   imageElement.src = `${currentModel.data.image}`
      //   card.appendChild(imageElement)
    
      //   // Brand Name
      //   const brandNameElement = document.createElement('h3')
      //   brandNameElement.textContent = `${currentModel.data.brandName}`
      //   card.appendChild(brandNameElement)
    
      //   // Model
      //   const modelElement = document.createElement('p')
      //   modelElement.textContent = `Model: ${currentModel.data.model}`
      //   card.appendChild(modelElement)
    
      //   // Price
      //   const priceElement = document.createElement('p')
      //   priceElement.textContent = `Price: ${currentModel.data.price}`
      //   card.appendChild(priceElement)
    
      //   // Features
      //   const featuresElement = document.createElement('ul')
      //   item.features.forEach(feature => {
      //     const featureItem = document.createElement('li')
      //     featureItem.textContent = `${featuresResponse.data}`
      //     featuresElement.appendChild(featureItem)
      //   })
      //   card.appendChild(featuresElement)
    
      //   // Append the card to the desired container
      //   document.body.appendChild(card) 
      // })
}

const cartInformation = async () => {

      myCart = await axios.get("http://localhost:3001/api/cart")
      console.log(myCart)

      let total = ""
      let cartDiv = document.querySelector('.modal-footer')
      let newDiv = document.querySelector('.modal-information')
      newDiv.innerHTML = ""

      for (let i = 0; i < myCart.data.length; i++) {
            
            let imageDiv = document.createElement('div')
            let imageElement = document.createElement('img')
            imageElement.src = `${myCart.data[i].image}`
            imageElement.classList.add('modelPic')
            let modelDiv = document.createElement('div')
            let modelElement = document.createTextNode(`Model: Will make axios call to grab info`)
            let priceDiv = document.createElement('div')
            let priceElement = document.createTextNode(`Price: $${myCart.data[i].price}`)
            let quantityDiv = document.createElement('div')
            let quantityElement = document.createTextNode(`Quantity: ${myCart.data[i].quantity}`)
            let subtotalDiv = document.createElement('div')
            let subtotalElement = document.createTextNode(`Subtotal: $${myCart.data[i].subtotal}`)
            // add quantity plus minus buttons here
            // price = parseInt(myCart.data[i].subtotal)
            // total += price
            const removeFromCartButton = document.createElement('button')
            removeFromCartButton.textContent = 'Remove from cart'
            // // Add To Cart Functionality
            removeFromCartButton.addEventListener('click', async() => {
                  const item = await axios.delete(`http://localhost:3001/api/cart/${myCart.data[i]._id}`)
                  console.log(myCart.data[i]._id)
                  modal.style.display = 'none'                   
            })

            imageDiv.appendChild(imageElement)
            modelDiv.appendChild(modelElement)
            priceDiv.appendChild(priceElement)
            quantityDiv.appendChild(quantityElement)
            subtotalDiv.appendChild(subtotalElement)
            newDiv.appendChild(imageDiv)
            newDiv.appendChild(modelDiv)
            newDiv.appendChild(priceDiv)
            newDiv.appendChild(quantityDiv)
            newDiv.appendChild(subtotalDiv)
            newDiv.appendChild(removeFromCartButton)
      }

      let cartTotalDiv = document.createElement('div')
      let cartTotalElement = document.createTextNode(`Total: ${total}`)
      cartTotalDiv.appendChild(cartTotalElement)
      cartDiv.appendChild(cartTotalDiv)
      
}
    

    
// Nikon 
nikon.addEventListener('click', async () => {
      brandNikon = await axios.get('http://localhost:3001/api/brands/name/nikon')
      currentBrand = brandNikon

      console.log(currentBrand)
      modelNikon = await axios.get(`http://localhost:3001/api/models/brands/${currentBrand.data[0]._id}`)
      currentModel = modelNikon
      console.log(currentModel)

      brandCards()
})

// // Sony 
sony.addEventListener('click', async () => {
      brandSony = await axios.get('http://localhost:3001/api/brands/name/sony')
      currentBrand = brandSony

      modelSony = await axios.get(`http://localhost:3001/api/models/brands/${currentBrand.data[0]._id}`)
      currentModel = modelSony

      brandCards()
})

// Canon 
canon.addEventListener('click', async () => {
      brandCanon = await axios.get('http://localhost:3001/api/brands/name/canon')
      currentBrand = brandCanon

      modelCanon = await axios.get(`http://localhost:3001/api/models/brands/${currentBrand.data[0]._id}`)
      currentModel = modelCanon

      brandCards()
})





//cart modal functions
cartButton.onclick = function() {
      modal.style.display = 'block'
      console.log('working')
      cartInformation()
}

closeSpan.onclick = function() {
      modal.style.display = 'none'
}

window.onclick = function(e) {
      if (e.target == modal) {
            modal.style.display = 'none'
      }
}
