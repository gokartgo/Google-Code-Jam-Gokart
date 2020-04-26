// 2 input question 1 line multiple input data 1 line
// example input
// 3
// 3 10
// 3 7 2
// 4 100
// 11 10 5 50
// 1 1
// 1
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let num_data = [];
let index_num_data = 0;
let find = [];
let index_find = 0;
let data = [];
let index_data = 0;
let question = 0;
let check = 1

const answer = (n) => {
    
    console.log(`Case #${n}: `)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line.split(' ')
        num_data[index_num_data++] = parseInt(input[0])
        find[index_find++] = parseInt(input[1])
        check = 2
    } else {
        data[index_data++] = line.split(' ')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(i+1)
    }
    process.exit(0);
});