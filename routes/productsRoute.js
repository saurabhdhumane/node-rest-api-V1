const express = require('express');
const { getAllProducts,getAllProductsTesting, getWelcome } = require('../controllers/productsController');
const router = express.Router();


router.route("/").get(getAllProducts)
router.route("/products").get(getAllProducts);

router.route("/testing").get(getAllProductsTesting);


module.exports = router;
