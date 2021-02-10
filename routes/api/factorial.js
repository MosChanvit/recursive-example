const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const num = req.body.num;
    if(!num){
        return res.status(400).send({error:true, message:"Press provide num"})
    }else{
    const  result_factorial = factorial(num);
    res.send({error:false ,result:result_factorial});
    }

});

function factorial(num) 
{ 

  if (num === 0)
 {
    return 1;
 }
  return num * factorial(num-1);
         
}




module.exports = router;
