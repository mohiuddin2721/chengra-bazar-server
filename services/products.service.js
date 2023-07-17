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
    const productData = {
        name: data.body.name,
        quantity: data.body.quantity,
        color: data.body.color,
        unit: data.body.unit,
        status: data.body.status,
        categories: data.body.categories,
        price: data.body.price,
        brand: data.body.brand,
        ratting: data.body.ratting,
        description: data.body.description,
        imageURL: await data.files?.map(file => file.path),
        // imageUrl: await data.files,
    };
    const product = await Product.create(productData);
    console.log("productData", productData)
    console.log("data.files", data.files)
    return product;
}

// query = category, brand, price range, rating, sort- price