module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')
    const ItemCategory = require('../../models/ItemCategory')
    const User = require('../../models/User')

    router.get('/category',async(req,res)=>{
        const model = await Category.find().populate('itemcategories itemcategories.seccategories').lean()
        res.send(model)
    })

    router.get('/itemcategory/:id',async(req,res)=>{
        const model = await ItemCategory.find({'category':req.params.id}).populate('seccategories').lean()
        res.send(model)
    })

    router.post('/register',async(req,res)=>{
        res.send(model)
    })

    router.post('/login',async(req,res)=>{
        res.send(model)
    })

    app.use('/api/web',router)
}