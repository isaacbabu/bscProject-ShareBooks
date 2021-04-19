const Pool = require('pg').Pool
const pool = new Pool({
  user: 'isaac',
  host: 'localhost',
  database: 'bscproject',
  password: 'isaac',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"users":results.rows})
  })
}
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE usersid = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"users":results.rows})
  })
}
const getBooks = (request, response) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"books":results.rows})
  })
}
const getBookById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM books WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"books":results.rows})
  })
}
const getBookDetails = (request, response) => {
  pool.query('SELECT * FROM bookdetails', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"bookdetails":results.rows})
  })
}
const getBookDetailById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM bookdetails WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json({"bookdetails":results.rows})
  })
}
const createUser = (request, response) => {
  const { id, usersname, usersemail, usersphone, usersdept, usersyear, usersroll } = request.body.user

  pool.query('INSERT INTO users (id, usersname, usersemail, usersphone, usersdept, usersyear, usersroll) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id, usersname, usersemail, usersphone, usersdept, usersyear, usersroll], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added.Post Success`)
  })
}
const createBooks = (request, response) => {
  const { id, name, code, year, owner, roll, dept, usercode } = request.body.book

  pool.query('INSERT INTO books (id, name, code, year, owner, roll, dept, usercode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [id, name, code, year, owner, roll, dept, usercode], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Book added.Post Success`)
  })
}
const createBookDetails = (request, response) => {
  const { id, name, author, bookid, year} = request.body.bookdetail

  pool.query('INSERT INTO bookdetails (id, name, author, bookid, year) VALUES ($1, $2, $3, $4, $5)', [id, name, author, bookid, year], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`BookDetail added.Post Success`)
  })
}
const deleteBooks = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Delete Success`)
  })
}
const deleteBookDetails = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM bookdetails WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Delete Success`)
  })
}
const deleteUsers = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Delete Success`)
  })
}



module.exports = {
  getUsers,
  getUserById,
  getBooks,
  getBookById,
  getBookDetails,
  getBookDetailById,
  createUser,
  createBooks,
  createBookDetails,
  deleteBooks,
  deleteBookDetails,
  deleteUsers

}
