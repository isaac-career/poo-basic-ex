// three first characters of a string, should be switch at the final at the string

function swiftChars (string, callback){


    // let workString = string;
    // workString+='B';


    const original = string;
    const second = string.substring(2,(original.length-1))
    const cuted = original.substring(0,3);

    // console.log("original= ", original);
    // console.log("cuted= ", cuted);
    // console.log("full= ", second+cuted);

    callback(second+' '+cuted)

}


swiftChars('I dont wanna be your parter in this', toPrint=>{
    console.log('changed string is= ', toPrint)
})

