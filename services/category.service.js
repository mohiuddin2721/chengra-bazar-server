const Category = require("../models/Category");

exports.createProductsService = async (data) => {
    const category = await Category.create(data);
    return category;
}