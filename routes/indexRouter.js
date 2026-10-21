const {Router} = require("express");
const {getIndexPage} = require("../controllers/homeController")


const indexRouter = Router();



indexRouter.get("/", getIndexPage);


module.exports = indexRouter;