function modifyArray(arr, callback){
    arr.push(5)
    callback()
}
let arr = [1,2,3,4]

modifyArray(arr,function(){
    console.log('Array has been modified', arr)
})
