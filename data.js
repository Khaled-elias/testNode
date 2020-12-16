const name = "superman"
const isTrue = false
const arr = [23,34,676,786]

const myObj ={
    name: "john cena",
    age :22
}
function saySome(){
    console.log("its me")
}

// module.exports.nameKey = name;
// module.exports.kim = isTrue;
// module.exports.kido = arr
// module.exports.aos = myObj

// module.exports = {
//     meme :name,
//     mernil : isTrue,
//     hakan:arr,
//     asad:myObj,
//     georg:saySome
// }

module.exports = {
    name,
     isTrue,
    arr,
    myObj,
    saySome
}