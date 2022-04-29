const express = require('express')
const { ctrlWrapper , validation}=require('../../middlewares')
const {joiSchema}=require('../../models/user')
const {users: ctrl} = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSchema), ctrlWrapper(ctrl.signup))
router.post('/login',ctrlWrapper(ctrl.login))
router.get('/logout',ctrlWrapper(ctrl.logout))
router.get('/current', ctrlWrapper(ctrl.current))

// router.get('/', ctrlWrapper(ctrl.listContacts))

// router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

// router.post('/', validation(joiShema), ctrlWrapper(ctrl.addContact))

// router.put('/:contactId', validation(joiShema), ctrlWrapper(ctrl.updateContact))

// router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

// router.patch('/:contactId/favorite',
//     validation(favoriteJoiShema),
//     ctrlWrapper(ctrl.updateStatusContact)
// );

module.exports = router