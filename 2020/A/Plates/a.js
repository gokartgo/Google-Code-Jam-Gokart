function a(number) {
    console.log(number)
    if(number === 8 || number > 12) {
        return 
    }
    a(number-1)
    console.log(number)
    a(number*2)
}

a(10)