const User = require('../models/user');
exports.getLogin = (req, res, next) => {
    res.render('auth/login',{
        path: '/login',
        pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn
    })
  };

  exports.postLogin = (req, res, next) => {
      User.findById('6252e9478ab08d754c7af658')
      .then( user => {
          req.session.isLoggedIn = true,
          req.session.user = user,
          req.session.save((err)=>{
              console.log(err);
              res.redirect('/');
          })
          
      });
  };

  exports.postLogout = (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    });
  }