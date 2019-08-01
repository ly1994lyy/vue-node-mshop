module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const News = require('../../models/News')
    const Category = require('../../models/Category')
    

    router.get('/category',async (req,res)=>{
        const model = await Category.find().lean()
        res.send(model)
    })

    router.get('/category/:id',async (req,res)=>{
        const model = await Category.findById(req.params.id)
        res.send(model)
    })

    router.post('/category',async (req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })

    router.put('/category/:id',async (req,res)=>{
        const model = await Category.findByIdAndUpdate(req.body)
        res.send(model)
    })

    router.delete('/category/:id',async (req,res)=>{
        const model = await Category.findByIdAndDelete(req.params.id)
        res.send(model)
    })

    app.use('/api/admin',router)
}