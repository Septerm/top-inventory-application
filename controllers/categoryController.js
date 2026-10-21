const db = require('../db/queries');




async function getCategories(req, res) {
    const categories = await db.getAllCategories();
    res.status(200).render("categories", {categories: categories});
}


function getNewCategoryForm(req, res) {
    res.status(200).render("category-form");
}


async function addCategory(req, res) {
    const {name} = req.body;

    await db.postCategory(name);

    res.status(200).redirect('/');
}


module.exports = {getCategories, getNewCategoryForm, addCategory}