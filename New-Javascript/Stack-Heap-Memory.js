//Types of Memory :

// 1)Stack (Primitive)

let myYoutubename = "Gamerphoenix"

let anothername = myYoutubename
anothername = "HardikKapoor27"

console.log(myYoutubename);
console.log(anothername);

// 2)Heap (Non-Primitive)


let userOne = {
    email: "userone@google.com",
    upi: "user@One"
}

let userTwo = userOne

userTwo.email = "usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);