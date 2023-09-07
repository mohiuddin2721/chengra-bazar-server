const Product = require('../models/Product');
const fs = require('fs');

exports.getProductsService = async (filters, queries) => {
    const products = await Product.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .sort(queries.sortBy)
    const total = await Product.countDocuments(filters)
    const pageCount = Math.ceil(total / queries.limit)
    return { total, pageCount, products };
}
// .select(queries.fields)
// .select()

exports.getProductByIdService = async (id) => {
    const product = await Product.findById(id)
    return product;
}

exports.createProductsService = async (data) => {
    console.log("data", data);
    const productData = data.body;
    // const productData = {
    //     ...data.body,
    //     imageURL: await data.files?.map(file => file.path),
    // };
    console.log("productData", productData)
    const product = await Product.create(productData);
    // console.log("product", product)
    // console.log("data.files", data.files)
    return product;
}

exports.updateProductsByIdService = async (productId, data) => {
    const product = await Product.findById(productId);
    const result = await product.set(data).save();
    return result;
}

exports.deleteProductsByIdService = async (id) => {
    const result = await Product.deleteOne({ _id: id })
    return result;
}

// query = category, brand, price range, rating, sort- price