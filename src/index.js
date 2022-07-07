const express = require('express')
const cors = require('cors')
const { v4 : uuidV4 } = require('uuid')

const app = express()

app.use(cors())
app.use(express.json())



app.listen(3001)