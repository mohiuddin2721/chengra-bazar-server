const { match } = require("assert");
const { getProductsService, createProductsService, getProductByIdService, updateProductsByIdService, deleteProductsByIdService } = require("../services/products.service")


exports.getProducts = async (req, res, next) => {
    
    res.send({"product":"successful"})
    // try {
    //     let filters = { ...req.query };
    //     // const excludeFields = ['categories', 'brand', 'rating', 'sort'];
    //     const excludeFields = ['sort', 'page', 'limit'];
    //     excludeFields.forEach(field => delete filters[field]);
    //     // console.log('Original objects:', req.query)
    //     // console.log('query Object:', filters)

    //     // gt, gte, lt, lte
    //     let filtersString = JSON.stringify(filters)
    //     filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
    //     filters = (JSON.parse(filtersString))
    //     // console.log(filters)
    //     // console.log(req.query.search)
    //     const queries = {};
    //     if (req.query.sort) {
    //         const sortBy = req.query.sort.split(',').join(' ')
    //         queries.sortBy = sortBy;
    //         // console.log(sortBy)
    //     }
    //     if (req.query.fields) {
    //         const fields = req.query.fields.split(',').join(' ')
    //         queries.fields = fields;
    //         // console.log(fields)
    //     }
    //     if (req.query.page) {
    //         const { page = 1, limit = 8 } = req.query;
    //         const skip = (page - 1) * parseInt(limit);
    //         queries.skip = parseInt(skip);
    //         queries.limit = parseInt(limit);
    //     }

    //     const products = await getProductsService(filters, queries)

    //     res.status(200).json({
    //         status: 'success',
    //         data: products,
    //     })
    // } catch (error) {
    //     res.status(400).json({
    //         status: 'fail',
    //         message: "can't get the data",
    //         error: error.message,
    //     })
    // }
}

exports.getProductsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log(id)
        const product = await getProductByIdService(id)
        // console.log(product)
        res.status(200).json({
            status: 'success',
            data: product,
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
        // console.log(req.file)
        const result = await createProductsService(req)
        // console.log(req.files)
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

exports.updateProductsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductsByIdService(id, req.body)
        res.status(200).json({
            status: 'success',
            message: "Product has been successfully Updated",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not updated the data',
            error: error.message,
        })
    }
}

exports.deleteProductsById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteProductsByIdService(id)
        res.status(200).json({
            status: "Success",
            message: "Product has been successfully deleted",
            data: result,
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Couldn't deleted the product",
            error: error.message,
        })
    }
}