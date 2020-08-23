const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let num_data = [];
let index_num_data = 0;
let data = [];
let index_data = 0;
let question = 0;
let check = 1

const answer = (n, num, data) => {
  let num_distance,num_distance_check, answer = 2, max = 2
  for (let i = 0; i < num - 1; i++) {
    let data_1 = parseInt(data[i])
    let data_2 = parseInt(data[i + 1])
    num_distance = data_1 - data_2
    if(num_distance === num_distance_check) {
      answer++
      if(answer > max) {
        max = answer
      }
    } else {
      answer = 2
    }
    num_distance_check = num_distance
  }
  console.log(`Case #${n}: ${max}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if (check % 2 === 1) {
      input = line
      num_data[index_num_data++] = parseInt(input)
      check = 2
    } else {
      data[index_data++] = line.split(' ')
      check = 1
    }
    question++
    if (question === num_test_cases * 2) {
      rl.close()
    }
  }
}).on('close', () => {
  for (let i = 0; i < num_test_cases; i++) {
    answer(i + 1, num_data[i], data[i])
  }
  process.exit(0);
});