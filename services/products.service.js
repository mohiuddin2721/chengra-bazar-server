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

exports.createProductsService = async (data) => {
    const product = await Product.create(data);
    return product;
}

// query = category, brand, price range, rating, sort- price