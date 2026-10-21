#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  category_id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  category_id INTEGER REFERENCES categories(category_id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name) 
VALUES
  ('Agrigulture'),
  ('Industrial'),
  ('Consumer Goods'),
  ('Pharmaceuticals'),
  ('Wines/Spirits');

INSERT INTO items (name, stock_quantity, category_id) 
VALUES
  ('Miracle Fertilzer - 10Kg', 50, 1),
  ('WD-40 16 OZ', 50, 2),
  ('Colgate Toothpaste 8 OZ', 50, 3),
  ('Histergan Cream 25g', 50, 4),
  ('Absolut Vodka 1L', 50, 5);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECT
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();