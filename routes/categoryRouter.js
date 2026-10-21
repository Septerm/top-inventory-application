const {Router} = require("express");
const {getCategories, getNewCategoryForm, addCategory} = require("../controllers/categoryController")


const categoryRouter = Router();



categoryRouter.get("/", getCategories);
categoryRouter.get("/new", getNewCategoryForm);
categoryRouter.post("/new", addCategory);

module.exports = categoryRouter;