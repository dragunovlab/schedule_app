let count = 0;
for(count = 0; count<10; count++){
setTimeout(()=>console.log(count), 0);
}



console.log('script start');//script start
setTimeout(function(){ //mackro task setTimeout
    console.log('setTimeout'); //micro task  promis
}, 0)
Promise.resolve().then(function(){ 
    console.log('promise1');
}).then(function(){
    console.log('promise2');
})
console.log('script end');


const obj = {
    a: 42, 
    say: function() {
        setTimeout(function() {console.log(this.a), 400})}
    
    }



    melo malo22:02
Vlad, [14.04.2022 00:00]
let count = 0;
for(count = 0; count<10; count++){
setTimeout(()=>console.log(count), 0);
}
melo malo22:06
console.log('script start');
setTimeout(function(){
    console.log('setTimeout');
}, 0)
Promise.resolve().then(function(){
    console.log('promise1');
}).then(function(){
    console.log('promise2');
})
console.log('script end');
melo malo22:09
const obj = {
a: 42, 
say: function() {
    setTimeout(function() {console.log(this.a), 400})}

}