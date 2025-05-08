

    const readder = require('readline');
    
    const rl = readder.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('guess one number from 1 to 10', ans =>{
        var guessNum = (ans === '5') ? 'good guess' : 'no guess'
        console.log(guessNum);
        rl.close();
    });




    // var input = readLine('introduce un numero del 1 al 10');
    // if(input === '8'){
    //     console.log('good match');
    // }else{
    //     console.log('no guessing');
    // }


