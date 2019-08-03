const express = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./router/admin/category')(app)
require('./router/admin/shop')(app)

app.use('/uploads',express.static(__dirname+'/uploads'))

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})