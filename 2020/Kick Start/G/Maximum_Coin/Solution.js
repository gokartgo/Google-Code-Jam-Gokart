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
let input_row_data = [];
let index_input_row_data = 0;
let input_data = [];
let question = 0;
let check = 0

const answer = (n, input_data) => {
  let sum = 0, max = 0, value;
  for(let i=input_data.length - 1; i >= 0 ; i--) {
    let row_index = 1, column_index = 1
    value = input_data[0][i]
    sum = 0

    while(value) {
      sum += parseInt(value)
      if(!input_data[0+row_index] || !input_data[0+row_index][i+column_index]) {
        break
      }
      value = input_data[0+row_index][i+column_index]
      row_index++
      column_index++
    }

    if(sum > max) {
      max = sum
    }
  }

  value = input_data[0][0]

  for(let i=0; i < input_data.length ; i++) {
    let row_index = 1, column_index = 1
    value = input_data[i][0]
    sum = 0

    while(value) {
      sum += parseInt(value)
      if(!input_data[i+row_index] || !input_data[i+row_index][0+column_index]) {
        break
      }
      value = input_data[i+row_index][0+column_index]
      row_index++
      column_index++
    }

    if(sum > max) {
      max = sum
    }
  }
  console.log(`Case #${n}: ${max}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check === 0) {
        input = line.split(' ')
        rows[question] = input[0]
        columns[question] = input[0]
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
        answer(i+1, input_data[i])
    }
    process.exit(0);
});