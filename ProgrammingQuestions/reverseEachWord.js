var sentence = prompt("Enter sentence")

let reverseEntireSentence = reverseBySeparator(sentence, "")

let reverseEachWord = reverseBySeparator(reverseEntireSentence, " ")

function reverseBySeparator(sentence, separator){
    return sentence.split(separator).reverse().join(separator)
}

console.log(reverseEachWord)
