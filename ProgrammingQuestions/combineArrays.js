arr_1 = [1,2,3,4,5,6,7]
arr_2 = [8,2,9,1,10,5]

combine = arr_1.concat(arr_2)

arr_3 = []
duplicates = []
for (i in combine) {
    if(combine[i] in arr_3){
        duplicates.push(combine[i])
    } else {
        arr_3.push(i)
    }
}
console.log(arr_3)
console.log(duplicates)
