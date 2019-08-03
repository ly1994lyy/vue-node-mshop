module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const multer = require('multer')
    const ItemCategory = require('../../models/ItemCategory')
    const SecondCategory = require('../../models/SecondCategory')
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
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/category/:id',async (req,res)=>{
        const model = await Category.findByIdAndDelete(req.params.id)
        res.send(model)
    })

    router.get('/itemcategory',async (req,res)=>{
        const model = await ItemCategory.find().populate('category').lean()
        res.send(model)
    })

    router.get('/itemcategory/:id',async (req,res)=>{
        const model = await ItemCategory.findById(req.params.id)
        res.send(model)
    })

    router.post('/itemcategory',async (req,res)=>{
        const model = await ItemCategory.create(req.body)
        res.send(model)
    })

    router.put('/itemcategory/:id',async (req,res)=>{
        const model = await ItemCategory.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/itemcategory/:id',async (req,res)=>{
        const model = await ItemCategory.findByIdAndDelete(req.params.id)
        res.send(model)
    })

    router.get('/secondcategory',async (req,res)=>{
        const model = await SecondCategory.find().populate('category').lean()
        res.send(model)
    })

    router.get('/secondcategory/:id',async (req,res)=>{
        const model = await SecondCategory.findById(req.params.id)
        res.send(model)
    })

    router.post('/secondcategory',async (req,res)=>{
        const model = await SecondCategory.create(req.body)
        res.send(model)
    })

    router.put('/secondcategory/:id',async (req,res)=>{
        const model = await SecondCategory.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/secondcategory/:id',async (req,res)=>{
        const model = await SecondCategory.findByIdAndDelete(req.params.id)
        res.send(model)
    })
    app.use('/api/admin',router)

    const upload = multer({dest:__dirname+'/../../uploads'})
    app.post('/api/admin/upload',upload.single('file'),async (req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}