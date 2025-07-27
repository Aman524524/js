const a=[1,2,3,-4,5,-56];

let fin1=a.find(function(n){
    return n<0;
});
console.log(fin1);

let fin2=a.findIndex(function(n){
    return n<0;
})
console.log(fin2);