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
let check = 0

const answer = (n, data) => {
  let temp, answer = {}, number = 0
  for(let i = 0;i<3;i++) {
    for(let j = 0;j<3;j++) {
      if(i === 1 && j === 1) {
        temp = parseInt(data[i][j])
        data[i][j] = 0
      } else if(i === 1 && j === 2) {
        data[i][j] = temp
      } else {
        data[i][j] = parseInt(data[i][j])
      }      
    }
  }

  answer[(data[0][0] + data[2][2])/2] = 1
  answer[(data[0][1] + data[2][1])/2] ? answer[(data[0][1] + data[2][1])/2]++ : answer[(data[0][1] + data[2][1])/2] = 1
  answer[(data[0][2] + data[2][0])/2] ? answer[(data[0][2] + data[2][0])/2]++ : answer[(data[0][2] + data[2][0])/2] = 1
  answer[(data[1][0] + data[1][2])/2] ? answer[(data[1][0] + data[1][2])/2]++ : answer[(data[1][0] + data[1][2])/2] = 1

  data[0][0] - data[0][1] === data[0][1] - data[0][2] && number++
  data[2][0] - data[2][1] === data[2][1] - data[2][2] && number++
  data[0][0] - data[1][0] === data[1][0] - data[2][0] && number++
  data[0][2] - data[1][2] === data[1][2] - data[2][2] && number++
  let max = 0
  Object.keys(answer).forEach(a => {
    if(!a.includes('.') && answer[a] > max) {
      max = answer[a]
    }
  })

  console.log(`Case #${n}: ${number + max}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check === 0) {
      data[index_data] = []
      data[index_data][check] = []
      data[index_data][check++] = line.split(' ')
    } else {
      data[index_data][check] = []
      data[index_data][check++] = line.split(' ')
    }
  
    if(check === 3) {
      check = 0
      index_data++
    }
    question++
    if(question === num_test_cases*3) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(i+1,data[i])
    }
    process.exit(0);
});