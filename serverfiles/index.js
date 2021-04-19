const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./query.js')
const port = 3000

app.use(bodyParser.json())
app.use(
   bodyParser.urlencoded({
     extended: true,
   })

)
app.get('/',(request, response) => {
  response.json({ info: 'read-share backend service using express and postgres'})
})

app.get('/users',db.getUsers)
app.get('/users/:id',db.getUserById)
app.get('/books',db.getBooks)
app.get('/books/:id',db.getBookById)
app.get('/bookdetails',db.getBookDetails)
app.get('/bookdetails/:id',db.getBookDetailById)
app.post('/users',db.createUser)
app.post('/books',db.createBooks)
app.post('/bookdetails',db.createBookDetails)
app.delete('/books/:id', db.deleteBooks)
app.delete('/bookdetails/:id', db.deleteBookDetails)
app.delete('/users/:id', db.deleteUsers)
app.listen(port, () => {
  console.log(`Server running on port ${port}. `)
})
