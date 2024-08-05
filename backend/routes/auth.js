const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

router.post('/createuser', [// username must be an email

    check('name', 'Enter a valid name').isLength({ min: 3 }),

    check('email', 'Enter a valid email').isEmail(),
    // password must be at least 5 chars long
    check('password', 'Enter a valid password').isLength({ min: 5 }),

   // custom validation to ensure password confirmation matches
   check('cpassword', 'Password not matching').custom((value, { req }) => value === req.body.password)
], async  (req, res) => {

        console.log(req.body);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry user with this email already exists"})
        }
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        })
        
        res.json({"name":"Niraj"});
        // .then(user => res.json(user))
        // .catch(err => console.log(error));
    })

module.exports = router;