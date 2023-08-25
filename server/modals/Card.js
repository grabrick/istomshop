const { Schema, model } = require('mongoose')

const schema = Schema({
    title: { type: String },
    description: { type: String },
    mainImage: { type: String },
    price: { type:Number },
    category: { type: String },
    rating: { type:Number },
    characteristics: {
        size: { type: String },
        structure: { type: String },
        moreImage: [{
            image2: { type: String },
            image3: { type: String },
            image4: { type: String },
        }],
    }
})

module.exports = model('Card', schema)