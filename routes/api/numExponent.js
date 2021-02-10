const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const num = req.body.num;
    const power = req.body.power;

    if(!num || !power){
        return res.status(400).send({error:true, message:"Press provide num and power"})
    }else{
    const  result_exponent = exponent (num,power);
    res.send({error:false ,result:result_exponent});
    }

});

function exponent (num, power) 
{
   if (power === 0) 
   {
    return 1;
    }
  else 
  {
    return num * exponent(num, power-1);
  }
};

module.exports = router;
