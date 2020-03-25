
let test = []
function a(number,start,sequence,word) {
    for(let i=start;i<=number;i++) {
        let temp = word
        word += i
        a(5,i+1,sequence+1,word)
        if(word.length === sequence) {
            console.log(word)
            word = temp
        }
        if(i===1 && sequence ===1) {
            console.log('break')
            break
        }
    }
}

a(5,1,1,'')