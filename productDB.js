require('dotenv').config();
const ConnectDB = require('./db/connect')
const Model = require('./models/productModel')
const sampleProductDB = require('./products.json')

const getProductData = async () => {
    try {
        await ConnectDB(process.env.DATABASE_CONNECTION_STRING)
        await Model.create(sampleProductDB)
        console.log("Sucess");
    } catch (error) {
        console.log("Product Db", error);
    }
}


getProductData()