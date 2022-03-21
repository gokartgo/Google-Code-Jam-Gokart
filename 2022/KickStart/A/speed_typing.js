// 1 input question 1 line multiple input data 1 line
// example input
// 3
// 3
// 3 7 2
// 4
// 11 10 5 50
// 1
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
let data = [];
let index_data = 0;
let question = 0;
let check = 1

const answer = (n, data1, data2) => {
    let data1_i = 0, data2_i = 0, answer = data2.length - data1.length, check = 0
    for(let i = 0; i<data2.length;i++) {
      
      if(data1[data1_i] === data2[i]) {
        check++
        data1_i++
      }
    }
    
    if(data1_i != data1.length) {
      console.log(`Case #${n}: IMPOSSIBLE`)
    } else {
      console.log(`Case #${n}: ${answer}`)
    }
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line
        num_data[index_num_data++] = input
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
        answer(i+1, num_data[i], data[i][0])
    }
    process.exit(0);
});
