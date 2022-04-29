const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  
  const result = await Contact.findByIdAndRemove(contactId)
  
  if (!result) {
    throw new NotFound(`Contact with id= ${contactId} not found`);
    // res.status(404).json({
    //   status: "error",
    //   code: 404,
    //   message: `Contact with id= ${contactId} not found`
    // })
  }
  
  res.json({
    status: "success",
    code: 200,
    message: `Contact with id= ${contactId} deleted`,
    data: {
      result
    }
  })
}

module.exports = removeContact;