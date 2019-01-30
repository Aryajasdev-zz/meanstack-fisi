'use strict';
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require("../api/users");
/* GET users listing. */
router.get("/",(req,res) =>{
    User.find().exec().then(docs => {
        res.status(200).json(docs);
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    })   
});

router.post("/", (req, res) =>{   
    User.find({email : req.body.email}).exec().then(user => {
        if(user.length>=1){
            return res.status(409).json({
                Message : "User is already exist"
            });
        }else{
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                if(err){
                    res.status(500).json({
                        error : err
                    })    
                }else{
                    var usr = new User({
                    firstname: req.body.firstname,  
                    lastname:req.body.lastname,
                    username:req.body.username,
                    address:req.body.address,
                    city :req.body.city,
                    country:req.body.country,
                    phone:req.body.phone,
                    img:req.body.img,
                    roleid:1,
                    email : req.body.email,
                    password : hash
                    });
                    usr.save().then((r) => {
                        res.status(200).json({
                            message : "User Created"
                        });
                    }, (e) => {
                        res.status(400).send(e);
                    }); 
                }
            }); 
        }        
    }).catch(err => {
        return res.status(500).json({
            error : err
        });
    });        
});

module.exports = router;