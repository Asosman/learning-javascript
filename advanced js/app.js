class Job {
    constructor(title, place, salary){
        this.title = title;
        this.place = place;
        this.salary = salary;
    }
  describe(){
    console.log(`i am a ${this.title} i work at ${this.place} and  i  earn ${this.salary}`);
  }
}

const developer = new Job('Programmer','Nigeria','20,000,000');

developer.describe();

const array = ['uche', 'nonso'];

const [uchechi,NonsoE] = array;
console.log(uchechi);
console.log(NonsoE);

const job = {
    title: 'political science',
    salary:'1000000'
}
const{title:jt, salary:js} = job;
console.log(jt);
console.log(js);
