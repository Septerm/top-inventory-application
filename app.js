require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const db = require("./db/queries");
const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter');
const indexRouter = require('./routes/indexRouter');

const PORT = process.env.PORT || 3000;
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}));


app.use('/', indexRouter);
app.use('/categories', categoryRouter);
app.use('/items', itemRouter);

app.listen(PORT, () => {
    console.log(`Server is running and listening on Port - ${PORT}`);
});