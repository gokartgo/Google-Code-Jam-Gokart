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

const answer = (n, data) => {
  let answer = [], check = data[0], answer_check = {}
  data.splice(0,1)
  while(data.length != 0) { 
    let length = data.length
    for(let i = 0; i < data.length; i++) {
      if(check[0] == data[i][data[i].length - 1] && data[i][0] == data[i][data[i].length - 1]) {
          check = data[i] + check
          data[i] = ''
      } else if(check[check.length - 1] == data[i][0] && data[i][0] == data[i][data[i].length - 1]) {
        check += data[i]
        data[i] = '' 
      }
    }
    for(let i = 0; i < data.length; i++) {
      if(check[0] == data[i][data[i].length - 1]) {
        check = data[i] + check
        data[i] = ''
        break
      } else if(check[check.length - 1] == data[i][0]) {
        check += data[i]
        data[i] = ''
        break
      }
    }
    let new_data = []
    for(let i = 0; i < data.length; i++) {
      if(data[i] != '') {
        new_data.push(data[i])
      }
    }
    data = new_data
    if (length == data.length) {
      answer.push(check)
      check = data[0]
      data.splice(0, 1)
    }
  }
  answer.push(check)
  answer = answer.join('')
  for(let i = 0; i < answer.length; i++) {
    if(answer[i] != answer[i + 1]) {
      if(answer_check[answer[i]] == 1) {
        answer = 'IMPOSSIBLE'
        break
      }
      answer_check[answer[i]] = 1
    }
  }
  console.log(`Case #${n}: ${answer}`)
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
        answer(i+1, data[i])
    }
    process.exit(0);
});