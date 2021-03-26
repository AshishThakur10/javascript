let a = "time 66"
let b = "time 33"
let c = "time 77"
setTimeout(function(){
//console.log('Async')
console.log(a)
},100)

//console.log('Synchronous')

console.log(c)
console.log(b)