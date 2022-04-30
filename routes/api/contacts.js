const express = require('express')
const { auth, ctrlWrapper , validation}=require('../../middlewares')
const {joiSchema, favoriteJoiShema}=require('../../models/contact')

const {contacts: ctrl} = require('../../controllers')

const router = express.Router()

router.get('/', auth, ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.addContact))

router.put('/:contactId', validation(joiSchema), ctrlWrapper(ctrl.updateContact))

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

router.patch('/:contactId/favorite',
    validation(favoriteJoiShema),
    ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router
