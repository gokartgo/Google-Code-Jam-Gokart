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
let index_input = 0;
let data = [];
let index_data = 0;
let question = 0;
let check = 1

const answer = (n, input, data) => {
    let min = Infinity, sum, max_value = parseInt(input[1]);
    for(let i = 0;i<=max_value ; i++) {
      sum = 0
      for(let j = 0;j<data.length;j++) {
        let target_value = parseInt(data[j])
        if(Math.abs(i - target_value) <= (max_value - target_value + i) &&
        Math.abs(i - target_value) <= (max_value - i + target_value)) {
          sum += Math.abs(i - target_value)
        } else if(max_value - target_value + i <= Math.abs(i - target_value) &&
        max_value - target_value + i <= (max_value - i + target_value)) {
          sum += (max_value - target_value + i)
        } else {
          sum += max_value - i + target_value
        }
      }

      if(sum < min) {
        min = sum
      }
    }
    console.log(`Case #${n}: ${min}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input[index_input++] = line.split(' ')
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
        answer(i+1, input[i], data[i])
    }
    process.exit(0);
});