let firstWord = prompt()
let secondWord = prompt()



function isAnagram(firstWord, secondWord){
    var a = firstWord.toLowerCase();
    var b = secondWord.toLowerCase();
    a = a.split("").sort().join("");
    console.log(a)
    b = b.split("").sort().join("");
    console.log(b)
    return a == b
}


console.log(isAnagram(firstWord,secondWord))
