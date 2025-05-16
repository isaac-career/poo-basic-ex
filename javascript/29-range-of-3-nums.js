/*
receive 3 nums and asses if they are into range of 50-99.
    - create reader for 1st num
    - create a conditional for compare range
    - print result
    - repeat x3

*/

const readline = require ('readline');

var count = 0;

const reader = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

var recursiveReading = function (){

    count +=1;
    
    reader.question('introduce a number', resp=>{
    if(resp == 'exit' || count ==3)
         return reader.close(); 
    else{


        console.log('got it, your answer was: ', resp);
        recursiveReading();
    }
        

    });
}

recursiveReading();



// for(let i = 0; i<4; i++){
//     let number = readForMe('introduce a number: ');
//     console.log('returned num= ', number )
// }




// if(num > 100 || num < 50)
//         console.log('number is out of range: ',resp)
//     else
//         console.log('number is in range: ',resp)


