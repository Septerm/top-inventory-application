const db = require('../db/queries');




async function getItems(req, res) {
    const items =await db.getAllItems();
    res.status(200).render("items", {items: items})
}


function getNewItemForm(req, res) {
    res.status(200).render("item-form")
}


async function addItem(req, res) {
    const {name, stock_quantity, category_id} = req.body;

    await db.postItem(name, stock_quantity, category_id);

    res.status(200).redirect('/')
}


module.exports = {getItems, getNewItemForm, addItem}