const { User } = require('../../models');
const {Conflict}=require('http-errors')

const signup = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict(`This email '${email}' is already in use.`)
    }
    const result = await User.create({ email, password })
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email: result.email,
                subscription:result.subscription
            }
        }
    })
}

module.exports = signup;