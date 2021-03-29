function Animal(owner){
    this.owner =owner;
}
function Dog(name,color){
    this.color=color;
    this.name=name;
}
var a =new  Animal("foo");
var b = new Dog("koo","red");
//console.log(a);
//console.log(b);
Animal.prototype.owner=a.owner;
Dog.prototype.color=b.color;
Dog.prototype.name=b.name;

Dog.appendProt=function (obj){
    for(var i in obj.prototype){
        this.prototype[i]=obj.prototype[i];
}};

Dog.appendProt(Animal);
console.log(b.owner);
