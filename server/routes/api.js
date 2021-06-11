const express = require ('express')
const router = express.Router()
const {HELLO, SEND_DATA, ADD_MOVIE, ALL_MOVIES, EDIT_MOVIE, DELETE_MOVIE} = require ("../controllers/movies.controller");
const {REGISTER, ALL_USERS, LOGIN} = require ("../controllers/user.controller");

router.get('/hello', HELLO)
router.post('/send', SEND_DATA)
router.post('/add', ADD_MOVIE)
router.get('/all', ALL_MOVIES)
router.put('/edit', EDIT_MOVIE)
router.delete('/delete', DELETE_MOVIE)

router.post('/register', REGISTER)
router.get('/allusers', ALL_USERS)
router.post('/login', LOGIN)

module.exports = router;