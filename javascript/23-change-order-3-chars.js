// changing the order of three first chars from top to bottom
// example:    'stadium' >>> 'diumsta'



const miVar = 'stadium';

const splited = miVar.split('');
console.log(typeof(splited));

console.log('Splited word: ', splited);

// const cuted= splited.slice(2,3);
let a =0;
do {
    a+=1;
    const cuted= splited.splice(0,1);
    console.log('Splited cuted: ', cuted, 'original :', splited);

    const t = cuted[0];
    console.log(typeof(t));

    splited.push(cuted[0]);
    console.log(splited);

} while (a<3);

