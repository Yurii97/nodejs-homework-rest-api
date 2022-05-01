const express = require("express");
const { auth, ctrlWrapper, validation } = require("../../middlewares");
const { joiSchema, favoriteJoiShema } = require("../../models/contact");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getContactById));

router.post("/", auth, validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:contactId",
  auth,
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeContact));

router.patch(
  "/:contactId/favorite",
  auth,
  validation(favoriteJoiShema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
