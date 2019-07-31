module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const News = require('../../models/News')

    router.get('/newslist',async (req,res)=>{
        const model = await News.find()
        res.send(model)
    })

    app.use('/api/admin',router)
}