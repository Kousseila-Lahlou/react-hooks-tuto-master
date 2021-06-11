const User = require('../schema/user')
module.exports.REGISTER = (req, res) => {

    console.log(req.body)
    if (!req.body.firstName) {
        return res.send({error: true, msg: 'firstname required'})
    }
    if (!req.body.lastName) {
        return res.send({error: true, msg: 'lastname required'})
    }
    if (!req.body.email) {
        return res.send({error: true, msg: 'email required'})
    }
    if (!req.body.password) {
        return res.send({error: true, msg: 'password required'})
    }
    const user = new User(req.body)
    user.save(req.body)
        .then(ok => {
            res.send({error: false, msg: 'User Added'})
        })
        .catch(err => {
            console.log(err)
            res.send({error: true, msg: 'User not added !'})
        })
}
module.exports.LOGIN = async (req, res) => {
    if (!req.body.email) {
        return res.send({error: true, msg: 'email required'})
    }
    if (!req.body.password) {
        return res.send({error: true, msg: 'password required'})
    }
    const user = await User.findOne ({email:req.body.email}).exec()
    if (!user) res.send ({error: true, msg: 'email invalid'})
    if (user.password !== req.body.password) res.send ({error: true, msg: 'password incorrect dumb'}) 
    res.send ('OK')
}
module.exports.ALL_USERS = (req, res) => {
    User.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.send('NOT OK')
    })
}
