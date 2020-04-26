// multiple input question 1 line multiple input data multiple line ( matrix )
// 2
// 2 4 5
// 10 10 100 30
// 80 50 10 50
// 3 2 3
// 80 80
// 15 50
// 20 10
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let rows = []
let columns = []
let command = []
let input_row_data = [];
let index_input_row_data = 0;
let input_data = [];
let question = 0;
let check = 0

const answer = (n) => {
    console.log(`Case #${n}: `)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check === 0) {
        input = line.split(' ')
        rows[question] = input[0]
        columns[question] = input[1]
        command[question] = input[2]
        check = 1
    } else {
        input_row_data[index_input_row_data++] = line.split(' ')
        if(index_input_row_data === parseInt(rows[question])) {
            input_data[question] = input_row_data
            input_row_data = []
            check=0
            index_input_row_data=0
            question++
        }
    }
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(i+1)
    }
    process.exit(0);
});