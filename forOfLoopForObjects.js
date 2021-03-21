var user={
    name : "arpit",
    age : 32,
    occupation :" aset",
};

for(let key of Object.entries(user)){
    console.log((key)+ " : "+(user[key]));
}