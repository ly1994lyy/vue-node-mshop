const express = require('express')

const app = express()

require('./plugins/db')(app)
require('./router/api/admin')(app)

app.use(require('cors')())
app.use(express.json())

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})