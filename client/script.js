// const { json } = require("express")

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


const brandCards = async (brand) => {
      // Card
      const card = document.createElement('div')
      card.classList.add('brandContainer')
      brandInfo.innerHTML = ""
      // brand.forEach(product => {
            
      //       // Image 
      //       const imageElement = document.createElement('img')
      //       imageElement.src = ``
      //       card.appendChild(imageElement)
      //       // Brand Name
      //       const brandNameElement = document.createElement('h3')
      //       brandNameElement.textContent = `${currentBrand.data.brand}`
      //       card.appendChild(brandNameElement)
      //       // Brand Info
      //       brandInfo.appendChild(card)
      // })
      for (let j = 0; j < currentBrand.data.length; j++) {
            // Image 
            const imageElement = document.createElement('img')
            imageElement.src = `${currentBrand.data[0].brandLogo}`
            card.appendChild(imageElement)
            // Brand Name
            const brandNameElement = document.createElement('h3')
            //brandNameElement.textContent = `${currentBrand.data[0].brand}`
            card.appendChild(brandNameElement)
            // Brand Info
            brandInfo.appendChild(card)
      }

      for(let i = 0; i < currentModel.data.length; i++) {
            const newDiv = document.createElement('div')
            //Image
            const pic = document.createElement('img')
            pic.classList.add('modelPic')
            pic.src = `${currentModel.data[i].image}`
            // Model
            const modelElement = document.createTextNode(`Model: ${currentModel.data[i].model}`)
            //modelElement.classList.add('modelName')
            //card.appendChild(modelElement)
            // Price    
            const priceElement = document.createTextNode(`Price: $${currentModel.data[i].price}`)
            //card.appendChild(priceElement)
            // Add To Cart Button
            const addToCartButton = document.createElement('button')
            addToCartButton.textContent = 'Add to Cart'
            // Add To Cart Functionality
            addToCartButton.addEventListener('click', async() => {
                  const item = await axios.post(`http://localhost:3001/api/cart/${currentModel.data[i]._id}`)
                    
            })
            newDiv.appendChild(pic)
            newDiv.appendChild(modelElement)
            newDiv.appendChild(priceElement)
            newDiv.appendChild(addToCartButton)
            
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
            pic.src = `${myCurrentModel.data.image}`
            // Model
            const modelElement = document.createTextNode(`Model: ${featuresResponse.data.connectivity}`)
            //modelElement.classList.add('modelName')
            //card.appendChild(modelElement)
            // Price    
            // const priceElement = document.createTextNode(`Price: $${currentModel.data[i].price}`)
            // //card.appendChild(priceElement)
            // // Add To Cart Button
            // const addToCartButton = document.createElement('button')
            // addToCartButton.textContent = 'Add to Cart'
            // // Add To Cart Functionality
            // addToCartButton.addEventListener('click', async() => {
            //       const item = await axios.post(`http://localhost:3001/api/cart/${currentModel.data[i]._id}`)
                    
            // })
            newDiv.appendChild(pic)
            newDiv.appendChild(modelElement)
           // newDiv.appendChild(priceElement)
           // newDiv.appendChild(addToCartButton)
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
}

closeSpan.onclick = function() {
      modal.style.display = 'none'
}

window.onclick = function(e) {
      if (e.target == modal) {
            modal.style.display = 'none'
      }
}
