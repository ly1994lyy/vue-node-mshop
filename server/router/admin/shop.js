module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Rule = require('../../models/Rule')
    const Shop = require('../../models/Shop')
    const Good = require('../../models/Good')

    router.get('/rule',async (req,res)=>{
        const model = await Rule.find().lean()
        res.send(model)
    })

    router.get('/rule/:id',async (req,res)=>{
        const model = await Rule.findById(req.params.id)
        res.send(model)
    })

    router.post('/rule',async (req,res)=>{
        const model = await Rule.create(req.body)
        res.send(model)
    })

    router.put('/rule/:id',async (req,res)=>{
        const model = await Rule.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/rule/:id',async (req,res)=>{
        const model = await Rule.findByIdAndDelete(req.params.id)
        res.send(model)
    })

    router.get('/shop',async (req,res)=>{
        const model = await Shop.find().lean()
        res.send(model)
    })

    router.get('/shop/:id',async (req,res)=>{
        const model = await Shop.findById(req.params.id)
        res.send(model)
    })

    router.post('/shop',async (req,res)=>{
        const model = await Shop.create(req.body)
        res.send(model)
    })

    router.put('/shop/:id',async (req,res)=>{
        const model = await Shop.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/shop/:id',async (req,res)=>{
        const model = await Shop.findByIdAndDelete(req.params.id)
        res.send(model)
    })

    router.get('/good',async (req,res)=>{
        const model = await Good.find().lean()
        res.send(model)
    })

    router.get('/good/:id',async (req,res)=>{
        const model = await Good.findById(req.params.id)
        res.send(model)
    })

    router.post('/good',async (req,res)=>{
        const model = await Good.create(req.body)
        res.send(model)
    })

    router.put('/good/:id',async (req,res)=>{
        const model = await Good.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.delete('/good/:id',async (req,res)=>{
        const model = await Good.findByIdAndDelete(req.params.id)
        res.send(model)
    })
    app.use('/api/admin',router)
}