const { getProductsService, createProductsService } = require("../services/products.service")


exports.getProducts = async (req, res, next) => {
    try {
        const filters = { ...req.query };
        // const excludeFields = ['categories', 'brand', 'rating', 'sort'];
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach(field => delete filters[field]);
        // console.log('Original objects:', req.query)
        // console.log('query Object:', filters)

        const queries = {};
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy;
            console.log(sortBy)
        }
        
        const products = await getProductsService(filters, queries)

        res.status(200).json({
            status: 'success',
            data: products,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message,
        })
    }
}

exports.createProduct = async (req, res, next) => {
    try {
        // data save() or create()
        // const result = await Product.create(req.body);
        // save() is the best method to insert data in database, because we can take any action before the data insert;
        // instance creation -> Do something -> save()
        // const product = new Product(req.body);
        // if (product.quantity === 0) {
        //     product.status = 'out-of-stock';
        // }
        const result = await createProductsService(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Successfully data inserted',
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message,
        })
    }
}