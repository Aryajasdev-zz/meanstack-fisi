'use strict';
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require("../api/users");
/* GET users listing. */
router.post("/", (req, res) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            if(user.length <1){
                return res.status(401).json({
                    error : "Email does not found"
                })
            }else{
                bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                    if(err){
                        return res.status(401).json({
                            error : "Password does not match"
                        }) 
                    }
                    if(result){
                       const token = jwt.sign({
                           email : user[0].email,
                           userId : user[0]._id
                        }, "secret", {
                            expiresIn: 60 * 60 
                        });                        
                       res.status(200).json({
                           mesasge : "auth successfull",
                           token : token
                       })     
                    }else{
                        return res.status(401).json({
                            error : "Auth Failed"
                        }) 
                    }
                });
            }
        })
        .catch(err => {
            return res.status(500).json({
                error : err
            });
        });
});

module.exports = router;