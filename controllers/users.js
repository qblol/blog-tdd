const User = require('../models/user');

module.exports = {
  register: function(req, res) {
    let newUser = User({
      username: req.body.username,
      password: req.body.password
    })
    newUser.save().then(function(data){
      res.send(data)
    })
  },
  login: function(req, res) {
    User.findOne({username:req.body.username}).then(function(data){
      !data ? res.send(`NO DATA`) :
      data.password != req.body.password ? res.send('WRONG PASS') :
      res.send(data)
    })
  },
  delete: function(req,res) {
    User.findOneAndRemove({username: req.params.username}).then(function(data) {
      res.send(data)
    })
  }
}
