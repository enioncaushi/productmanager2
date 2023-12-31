const Product = require('../models/product.model');

module.exports.createProduct = (request, response) => {
    Product.create(request.body) //This will use whatever the body of the client's request sends over
            .then(product => response.json(product))
            .catch(err => response.status(300).json(err));
};

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err));
};

module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err));
};
