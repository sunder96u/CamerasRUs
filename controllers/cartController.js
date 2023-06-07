const { Cart, Model, Brand } = require('../models')

const addToCart = async (req, res) => {
//check if exists in cart
    //if exists add quantity
//else create new product in car
    try {
        const { id } = req.params
        const item = await Cart.findById(id)
        if (!item) {
            const product = await Model.findById(item.id)
            const newItem = new Cart.create({        
                productName: product.id,
                price: product.price,
                image: product.image,
                quantity: 1,
                subtotal: product.price
            })
            res.status(201).json(newItem)
        } else {
            const qnt = item.qnt + 1
            const subTotal = item.subtotal * qnt
            const updatedItem = await Cart.findByIdAndUpdate(item.id, {[qantity]: qnt})
            updatedItem = await Cart.findByIdAndUpdate(item.id, {[subtotal]: subTotal})
            res.status(201).json(updatedItem)
        }
    } catch (e) {
        console.log(e)
        res.status(500).send('Item not added to cart')
    }
}

const removeFromCart = async (req, res) => {
//remove from cart
try {
    const { id } = req.params
    const item = new Cart.findByIdAndDelete(id)
    if(!item) throw Error('Item not removed from cart')
    res.status(200).json(item)

} catch (e) {
    console.log(e)
    res.status(500).send('Item not removed from cart')
}
}

const changeQntPlus = async (req, res) => {
//check is qnt is higher or lower
//if higher change qnt and save
//if lower, see if will change to 0, change qnt to 0 subtotal to 0 leave in cart
    try {
        const { id } = req.params
        const item = new Cart.findById(id)
        const newQnt = item.qantity += 1
        const newSubtotal = item.subtotal * newQnt
        const updatedItem = await Cart.findByIdAndUpdate(id, {[subtotal]: newSubtotal })
        updatedItem = await Cart.findByIdAndUpdate(id, {[quantity]: newQnt})
        res.status(201).json(updatedItem)
    } catch (e) {
        console.log(e)
        res.status(500).send('Item quantity not changed')
    }
}

const changeQntMinus = async (req, res) => {
    //check is qnt is higher or lower
    //if higher change qnt and save
    //if lower, see if will change to 0, change qnt to 0 subtotal to 0 leave in cart
        try {
            const { id } = req.params
            const item = new Cart.findById(id)
            const newQnt = item.qantity -= 1
            const newSubtotal = ''
            const updatedItem = ''
            if (newQnt <= 0) {
                newSubtotal = 0
                updateItem = await Cart.findByIdAndUpdate(id, {[subtotal]: 0})
                updateItem = await Cart.findByIdAndUpdate(id, {[quantity]: 0})
            } else {
                newSubtotal = item.subtotal * newQnt
                updatedItem = await Cart.findByIdAndUpdate(id, {[subtotal]: newSubtotal })
                updatedItem = await Cart.findByIdAndUpdate(id, {[quantity]: newQnt})
            }
            res.status(201).json(updatedItem)
        } catch (e) {
            console.log(e)
            res.status(500).send('Item quantity not changed')
        }
    }

module.exports = {
    addToCart,
    removeFromCart,
    changeQntPlus,
    changeQntMinus
}