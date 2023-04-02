const express = require('express');
const app = express();
const port = 8000;
const conn = require('./db/dbconn.js');
const cors = require('cors');

app.use(cors());


//Then initialize the express to parse JSON data to get the form data, the form data is nested data so we also have to specify the URL encoding as extended true.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post('/signin', (req, res) => {
    const { email, password } = req.body;


    conn.query(`SELECT * FROM registration_form WHERE email = '${email}';`, (err,result) => {

        if ( result.length == 1 )
        {
            conn.query(`SELECT * FROM registration_form WHERE email = '${email}' AND password = '${password}';`, (err,result) => {

                if ( result.length == 1 )
                {
                    res.send('found');
                }
                else
                {
                    res.send('Your password is incorrect.');
                }
            });            
        }
        else
        {
            res.send('Your Email id is not registered.');
        }
    });

})

app.post('/signup',( req , res ) => {

    const { name , email , phoneNumber , password } = req.body;

    conn.query(`INSERT INTO registration_form ( name, email, phnumber, password ) VALUES ( '${name}','${email}','${phoneNumber}','${password}');`,(err) => {
        if (err) throw err;
        console.log('date inserted!');
        res.send('Successful');
    });
});



app.get('/', (req, res) => {
    res.send('Hello Siddhant This message from Server');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})