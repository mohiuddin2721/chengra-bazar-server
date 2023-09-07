const Category = require("../models/Category");

exports.getCategoryService = async () => {
    const category = await Category.find();
    return category;
}

exports.createCategoryService = async (req) => {
    const data = req.body;
    // const categoryData = {
    //     ...data.body,
    //     photo: data.file.path
    // }
    // console.log(req)
    const category = await Category.create(data);
    // console.log("server", category)
    return category;
}