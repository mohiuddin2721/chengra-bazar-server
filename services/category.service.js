const Category = require("../models/Category");

exports.getCategoryService = async () => {
    const category = await Category.find();
    return category;
}

exports.createCategoryService = async (data) => {
    const categoryData = {
        ...data.body,
        photo: data.file.path
    }
    // console.log(categoryData)
    const category = await Category.create(categoryData);
    // console.log("server", category)
    return category;
}