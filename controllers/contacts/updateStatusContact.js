const { Contact } = require('../../models')
const { NotFound } = require('http-errors')

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(contactId, {favorite}, {new:true})
  
  if (!result) {
    throw new NotFound(`Contact with id= ${contactId} not found`);
    // return res.status(404).json({
    //   status: "error",
    //   code: 404,
    //   message: `Contact with id= ${contactId} not found`
    // })
  }
  
  res.json({
    status: "success",
    code: 200,
    message: `Contact with id= ${contactId} update`,
    data: {
      result
    }
  })
}

module.exports = updateStatusContact;