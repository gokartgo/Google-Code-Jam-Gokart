const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input_num_mural = [];
let input_mural = [];
let index_input_num_mural = 0;
let index_input_mural = 0;
let question = 0;
let check = 1

const answer = (input_num_mural,input_mural,n) => {
    let num = Math.ceil(input_num_mural/2)
    let first = 0,last = 0
    let sum = 0
    let max = 0
    for(let i=0;i<input_num_mural;i++) {
        sum += (input_mural[i] * 1)
        if(i === num-1) {
            if(sum > max) {
                max = sum
            }
            num++
            sum -= (input_mural[first]*1)
            first++
        }
    }
    console.log(`Case #${n}: ${max}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input_num_mural[index_input_num_mural++] = line
        check = 2
    } else {
        input_mural[index_input_mural++] = line.split('')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(input_num_mural[i],input_mural[i],i+1)
    }
    process.exit(0);
});