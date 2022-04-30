const express = require('express')
const { ctrlWrapper , validation, auth}=require('../../middlewares')
const {joiSchema}=require('../../models/user')
const {users: ctrl} = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSchema), ctrlWrapper(ctrl.signup))
router.post('/login', validation(joiSchema), ctrlWrapper(ctrl.login))
router.get('/logout',ctrlWrapper(ctrl.logout))
router.get('/current', auth, ctrlWrapper(ctrl.current))

module.exports = router