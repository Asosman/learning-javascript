const user= 'level';
let person = {
    name:'uche',
    info:{
        [user]:'w3'
    },
    age:10,
    1.4:'hello',
    hobbies:['cooking','Eating','Sports'],
    greet:function(){
        console.log(`Hello, I am ${this.name} am ${this.age} years old, i like watching ${this.hobbies[2]}`);
    }    
}

person.greet();
// const arr = [32.2,44.1,12.4,53.3];
// const person1 = [
//     {
//         name:'uche',
//         age:'32'
//     },
//     {
//         name:'nonso',
//         age:39
//     }
// ]

// const anotherCopiedArr = person1.map(person =>({cName:person.name,cAge:person.age}));
// console.log(person1.slice());
// console.log(person1);
// person1[0].name ='amara';

// console.log(anotherCopiedArr);


// const copiedArr = arr.map((arr) => ({name:arr}))

// console.log(copiedArr);
// const copiedPerson = person.map((person)=>({name:person.name,age:person.age}))
// console.log(copiedPerson);
// console.log(person.isAdmin=true);

console.log(person.info[user]);