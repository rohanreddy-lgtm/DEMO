const { parse } = require('dotenv');
const express=require('express');
const app=express();
const PORT = 3000;
app.get('/status-info',(req,res)=>{  
 const statusCode ={
    200 : 'OK',
    201 : 'Created',
    204 : 'No Content',
    400 : 'Bad Request',
    401 : 'Unauthorized',
    403 : 'Forbidden',
    404 : 'Not Found',
    405 : 'Method Not Allowed',
    429 : 'Too Many Requests',


 }
    const code = parseInt(req.query.code);

    if(statusCode[code]){
        res.send({
            "status": code,
            "message": statusCode[code]
        })

    }

        else{
           res.send({
               "status": 400,
               "message": "Bad Request"
           })
        }
    }
);

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT}.);
});


