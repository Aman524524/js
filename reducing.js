let n=[100,120,130,140,150];

let result=n.reduce(function(acc,value){
    let updatedsum= acc + value;
    return updatedsum;
}, 0);
console.log(result);