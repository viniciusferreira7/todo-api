const express = require('express')
const cors = require('cors')
const { v4 : uuidV4 } = require('uuid')

const app = express()

app.use(cors())
app.use(express.json())


const users = []

const checkUserNameExist = (req, res, next) => {
  const { userName } = req.body

 const user = users.find(user => user.userName === userName)

  if (user) {
    return res.status(400).send({error: 'UserName already exist'})
  }

  req.body = user

  return next()
}

app.post('/user', (req, res) => {
  const { name , userName } = req.body

  const verifyUserNameExist = users.find(user => user.userName === userName)

  if (verifyUserNameExist) {
    return res.status(400).send({error: 'UserName already exist'})
  }
  
  const user = {
    id: uuidV4(),
    name: name,
    userName:userName,
    todos:[]
  }

  users.push(user)

  return res.status(201).json(user)
})


app.listen(3001)