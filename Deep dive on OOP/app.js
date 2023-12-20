class Person{
    #name = 'uche';
    constructor(){
        this.age = 98;
    }

    greeting(){
        console.log(`I am ${this.#name} and i am ${this.age} old`);
    }
}



function person(){
    this.name = 'uche';
    this.like = 'football'
    this.greet = function(){
        console.log(`The name is ${this.name}`);
    }
}
const pf = new person();
const p = new Person();

 console.log(p.toString());

pf.greet();
p.greeting();