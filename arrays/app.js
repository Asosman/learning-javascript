// const name_test = 'Asogwa';
// const arr = Array.from(name_test);
// console.log(arr);

// const first = Math.floor(arr.length/2);


// console.log(arr.splice(0,first));

const hobbies =['Cooking','Sports', 'Coding', 'Eating'];
const result = [23,23.4,53,53.3,54];

// // const poped = hobbies.pop();
// hobbies.unshift('Jug out');
// hobbies.shift();
// hobbies.push('Coke');
// console.log(hobbies);

// const numbervalue =[[1,3,4],[1,6,7,8],[4,6,8,3,]];

// for (numbers of numbervalue){
//     for(numbers of numbervalue){
//         console.lo(numbers);
//     }
//     console.log("\n");
// }
const testResult = hobbies.concat(result);


const slice1= hobbies.slice(1,2);

console.log(hobbies);
console.log(testResult);
// console.log('array slice and splice confusion');
// console.log(arr);
// console.log('sliced array in here!!!!');
// console.log(slice1);

const personData = [{name:'uche',age:53},{name:'nonso',age:39}]

// const uche = personData.findIndex((person,index,persons)=>{
//     return person.name === 'uche';
    
// });

// console.log(uche);
const prices = [100,10,34.3,32.1, 12.3,56.1,62.1];
// const adjPrices =[];

// const tax = 0.34;

// for(const price of prices){
//     console.log(price * (1 + tax));
// }

// prices.forEach((price,idx,prices)=>{
//     taxObject = {
//         index:idx,
//         adjP: price * (1 + tax)
//     }
//     adjPrices.push(taxObject);
//     console.log(taxObject);
// // })
// const newPrice = prices.map((price,idx,prices)=>{
//     taxObject = {
//         index:idx,
//         adjP: price * (1 + tax)
//     }
//     return taxObject;
// });

// console.log(newPrice);

// const sorted = prices.sort((a,b)=>{
//     if(a > b){
//         return 1;
//     }else if (a === b ){
//         return 0;
//     }else{
//         return -1;
//     }
// });

// console.log(sorted.reverse());

// const filtered =prices.filter(price =>price > 50);

// console.log(filtered.reverse());

// const sum = prices.reduce((pValue,cValue) => pValue + cValue,0);

// console.log(sum);



// const data = `234,2122,1223,654,5436,4523`;

// const splitted = data.split(',');

// console.log(splitted);

// const nam= ['max','uche'];
// const joinedName = nam.join(" ");

// console.log(joinedName);

// const min = Math.min(...prices);
// console.log(min);

// const person =[{
//     name:'max',
//     age:10
// },
// {
//     name:'uche',
//     age:23,
// }
// ]

// const copiedPerson = [...person];
// person.push({name:'lorenz',age:24});

// const copyP = person.map(person => ({
//     name:person.name,
//     age:person.age
// }))
// person[0].name = 'Stanley';
// console.log(copiedPerson, person, copyP);

// const nameData = ['uche','stanley','Mr',10];

// const [firstName,LastName,...others] = nameData;

// console.log(firstName,LastName,others);

const idx = new Set([1,2,3,4,5]);

console.log(idx.entries());