const list = [1]
const otherList = list.concat([2,12])

const user = {
    email: 'Jose@dev.com',
    password: '1234',
    phoneNumber: '3015121461',
    products: ['keyboard', 'mouse', 'iphone']
}


// Fuctions expression 
const sumar = (n1, n2) => {
    console.log(n1)
    console.log(n2)

    return n1 + n2
}

// Functions declaration
function restar (n1, n2){
    console.log(n1)
    console.log(n2)

    return n1 - n2;
}