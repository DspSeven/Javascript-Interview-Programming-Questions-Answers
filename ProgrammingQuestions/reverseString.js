name = prompt()

rev = ""
for (let i in name){
    rev = name[i] + rev
}
console.log(rev)
