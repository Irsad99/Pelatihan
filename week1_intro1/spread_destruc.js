let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincare@april.biz",
    address : {
        street : "Kulas Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874"
    },
    phone : "1-770-736-8031 x56442",
    website : "hildegard.org"
}

// Spread Operator

let dataCoba = {...data}
dataCoba.name = "Moh Irsad"
dataCoba.email = "irsadmoh01@gmail.com"
dataCoba.hobi = ["Bermain Futsal", "Jogging", "Swimming"]

console.log(dataCoba);

// Destructuring

const {street , city} = data.address

console.log("street : " + street);
console.log("city : " + city);
