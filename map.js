const inr=[1,2,13,100, 80];

const dollorRate=80;

const dollorchange=inr.map(function(a){
    return a/dollorRate;
})
console.log(dollorchange);