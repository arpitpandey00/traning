function Add(num1, num2, ...ep) {
  if (arguments.length < 2) {
    let res = 0;
    return res;
  } else if (arguments.length == 2) {
    let res = num1 + num2;
    if (Number.isNaN(res)) {
      console.log(" It's not a number mate:ERROR");
    } else return res;
  } else if (arguments.length > 2) {
    var num = 0;
    let res = num1 + num2;
    let arr=[];
    var k=0;
    for(let i=2;i<arguments.length;i++)
    {
        arr[k++]=arguments[i];
    }
    arr.forEach(function(item){
      num = num + item;
    });
    if (Number.isNaN(res) || Number.isNaN(num)) {
      console.log(" It's not a number mate: ERROR");
    } else {
      if (num > res) {
        return num - res;
      } else {
        return res - num;
      }
    }
  }
}

let v = Add(5,6);
console.log(v);
