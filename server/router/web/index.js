module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    const ItemCategory = require('../../models/ItemCategory')

    router.get('/category',async(req,res)=>{
        const model = await Category.find().populate('itemcategories itemcategories.seccategories').lean()
        res.send(model)
    })

    router.get('/itemcategory',async(req,res)=>{
        const model = await ItemCategory.find().populate('seccategories').lean()
        res.send(model)
    })

    app.use('/api/web',router)
}