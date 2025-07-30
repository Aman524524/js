let a=[
    {name:"aman",age:20,gender:"M"},
    {name:"suman", age:12, gender:"F"},
    {name:"riteh", age:21, gender:"M"},
]

let arr=a.filter(function(n){
    return n.gender==="M";
}).map(function(n){
    return n.age});

    console.log(arr);