const { Cart, Model, Brand } = require('../models')

const findCart = async (req, res) => {
    try {
        const cart = await Cart.find()
        if(!cart) throw Error('Cart not found')
        res.status(200).json(cart)
    } catch (e) {
        console.log(e)
        res.status(500).send('Cart not found')
    }
}

const addToCart = async (req, res) => {
    try {
        const { id } = req.params
        let item = await Cart.findOne({productName: id})
        if (!item) {
            const product = await Model.findById(id)
            const newItem = await Cart.create({        
                productName: product.id,
                price: product.price,
                image: product.image,
                quantity: 1,
                subtotal: product.price
            })
            res.status(201).json(newItem)
        } else {
            let qnt = item.quantity + 1
            let newSubtotal = item.price * qnt
            item = await Cart.findByIdAndUpdate(item.id, {quantity: `${qnt}`})
            item = await Cart.findByIdAndUpdate(item.id, {subtotal: `${newSubtotal}`})
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
    const item = await Cart.findByIdAndDelete(id)
    if(!item) throw Error('Item not removed from cart')
    res.status(200).json(item)

} catch (e) {
    console.log(e)
    res.status(500).send('Item not removed from cart')
}
}

const changeQntPlus = async (req, res) => {
    try {
        const { id } = req.params
        let item = await Cart.findById(id)
        let newQnt = item.quantity += 1
        let newSubtotal = item.price * newQnt
        let updatedItem = await Cart.findByIdAndUpdate(id, {subtotal: newSubtotal })
        updatedItem = await Cart.findByIdAndUpdate(id, {quantity: newQnt})
        res.status(201).json(updatedItem)
    } catch (e) {
        console.log(e)
        res.status(500).send('Item quantity not changed')
    }
}

const changeQntMinus = async (req, res) => {
        try {
        const { id } = req.params
        let item = await Cart.findById(id)
        console.log(item)
        let newQnt = item.quantity -= 1
        let newSubtotal = ''
        let updatedItem = ''
        if (newQnt <= 0) {
            newSubtotal = 0
            updatedItem = await Cart.findByIdAndUpdate(id, {subtotal: 0})
            updatedItem = await Cart.findByIdAndUpdate(id, {quantity: 0})
        } else {
            newSubtotal = item.price * newQnt
            updatedItem = await Cart.findByIdAndUpdate(id, {subtotal: newSubtotal })
            updatedItem = await Cart.findByIdAndUpdate(id, {quantity: newQnt})
        }
        res.status(201).json(updatedItem)
    } catch (e) {
        console.log(e)
        res.status(500).send('Item quantity not changed')
    }
}

module.exports = {
    findCart,
    addToCart,
    removeFromCart,
    changeQntPlus,
    changeQntMinus
}
