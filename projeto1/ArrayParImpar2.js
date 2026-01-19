
function batata(array) {
    let parResult = 0
    let imparResult = 0
    let imparArray = []
    let parArray = []
    for (i = 0; i < 5; i++) {

        if (array[i] % 2 == 0) {
            console.log(array[i] + " é par")
            parResult += array[i]
            parArray.push(array[i])
        }

        else {
            console.log(array[i] + " é impar")
              imparResult += array[i]
              imparArray.push(array[i])
           
        }

    }
    console.log(" A soma total é: " + (parResult + imparResult))
    console.log(parArray)
    console.log(imparArray)
}
batata([6, 7, 8, 9, 2])