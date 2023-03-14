function createBase(number){
    return function(N){
        return number + N
    }
}
let addSix = createBase(10)
console.log(addSix(20
