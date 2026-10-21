const pool = require("./pool");




// Get Queries
async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows ;
}

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows ;
}


// Post Queries 
async function postCategory(name) {
    await pool.query(
        `INSERT INTO categories (name) VALUES ($1)`,
        [name]
    );
}

async function postItem(name, stock_quantity, category_id) {
    await pool.query(
        `INSERT INTO categories (name, stock_quantity, category_id) VALUES ($1, $2, $3)`,
        [name, stock_quantity, category_id]
    );
}



module.exports = {
    getAllCategories,
    getAllItems,
    postCategory,
    postItem
}