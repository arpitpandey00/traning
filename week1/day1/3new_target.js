function Pandeyji(name, age){
    if(!new.target){
        console.log("it cannot be invoked without new:Please try again with");
    }
    this.name=name,
    this.age=age;
}
let p=  Pandeyji('arpit',25);
console.log(p);