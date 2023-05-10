import express from 'express'
import { getUser, createUser, getUsers, updateUserById, deleteUserById } from '../controllers/users.js'

const router = express.Router()

//all routes in here are starting with /users
router.get('/', getUser)
router.post('/', createUser)
router.get('/:id', getUsers)
router.patch('/:id', updateUserById)
router.delete('/:id', deleteUserById)

export default router;