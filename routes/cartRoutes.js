//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const cartApi = require('../apis/cartApis')

//insert a record
router.post("/add", cartApi.add_to_cart)
//delete a record
router.delete("/delete", cartApi.delete_from_cart)


//export router
module.exports = router