function mul(a){
    return function(b){
        return a + b
    }
}
console.log(mul(5)(6))
