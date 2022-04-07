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
  let new_data = [Infinity,Infinity,Infinity,Infinity], check = false
  for(let i = 0;i<data[0].length;i++) {
    for(let j = 0;j<data.length;j++) {
      if(parseInt(data[j][i]) < new_data[i]) {
        new_data[i] = parseInt(data[j][i])
      }
    }
  }
  let sum = 0, answer = []
  for(let i = 0;i<new_data.length;i++) {
    answer[i] = 0
    if(check) {
      continue
    }
    sum += new_data[i]  
    if(sum >= 1000000) {
      answer[i] = 1000000 - (sum - new_data[i])
      check = true
    } else {
      answer[i] = new_data[i]
    }
  }
  if(!check) {
    console.log(`Case #${n}: IMPOSSIBLE`)
  } else {
    console.log(`Case #${n}: ${answer.join(' ')}`)
  }
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line.split(' ')
    question++
    if(question === num_test_cases*3) {
        rl.close()
    }
  }
}).on('close',() => {
    let data1 = [], index = 0
    
    for(let i=0;i<num_test_cases;i++) {
      for(let j=0;j<3;j++) {
        data1[j] = data[index++]
      }
        answer(i+1, data1)
    }
    process.exit(0);
});