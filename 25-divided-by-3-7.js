// vrify if a number is multiple of 3 or 7
const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


const seven = 7;
const three = 3;

console.log('4 divided by 7 = ', 4%seven)
console.log('6 divided by 3 = ', 6%three)

rl.question('insert a number', ans =>{
    if(ans%three == 0 || ans%seven == 0){
        console.log('your name is: ', ans, 'and is multiple of 3 or 7');

    }else{
        console.log('your number is:', ans, 'and is not multiple of 3 or 7')
    }
    rl.close();
})
