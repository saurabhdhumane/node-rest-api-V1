const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const { company, name, featured, sort, select } = req.query;
        const queryObject = {};

        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10

        const skipPage = (page - 1) * limit

        if (company) {
            queryObject.company = { $regex: company, $options: "i" };
        }

        if (featured) {
            queryObject.featured = featured // Ensure featured is a boolean
        }

        if (name) {
            queryObject.name = { $regex: name, $options: "i" };
        }

        let productsQuery = ProductModel.find(queryObject);

        productsQuery = productsQuery.skip(skipPage).limit(limit)

        if (sort) {
            const sortBy = sort.split(',').join(' ');
            productsQuery = productsQuery.sort(sortBy);
        }

        if(select){
            const selectFix = select.split(',').join(' ');
            productsQuery = productsQuery.select(selectFix)
        }

        const products = await productsQuery;

        res.status(200).json({
            success: true,
            data: products,
            nbHits : products.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getAllProductsTesting = async (req, res) => {
    try {
        const products = await ProductModel.find(req.query);
        res.status(200).json({
            success: true,
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getWelcome = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome To API"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = { getAllProducts, getAllProductsTesting, getWelcome };
