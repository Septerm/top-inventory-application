const {Router} = require("express");
const {getItems, getNewItemForm, addItem} = require("../controllers/itemController")


const itemRouter = Router();



itemRouter.get("/", getItems);
itemRouter.get("/new", getNewItemForm);
itemRouter.post("/new", addItem);

module.exports = itemRouter;