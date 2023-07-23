const Product = require('../models/Product');

exports.getProductsService = async (filters, queries) => {
    const products = await Product
        .find(filters)
        .sort(queries.sortBy)
    const total = await Product.countDocuments(filters)
    return { total, products };
}
// .sort()
// .select(queries.fields)
// { price: { $gte: 2000, $lte: 4000 } }
// .skip()
// .limit()
// .select()

exports.getProductByIdService = async (id) => {
    const product = await Product.findById(id)
    return product;
}

exports.createProductsService = async (data) => {
    const productData = {
        ...data.body,
        imageURL: await data.files?.map(file => file.path),
    };
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