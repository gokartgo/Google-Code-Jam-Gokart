// many input data 1 line
// 4
// SSSEEE
// N
// N3(S)N2(E)N
// 2(3(NW)2(W2(EE)W))
const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let data = [];
let index_data = 0;
let question = 0;

const answer = (n, data) => {
  let data_arr = data.split(''), check_answer = [], answer
  for(let i = 0; i < data_arr.length + 1; i++) {
    let start = 0
    if (i == 0) {
      start = 1
    }
    while(start <= 9) {
      let new_data = data.split('')
      new_data.splice(i, 0, start.toString())
      let check = parseInt(new_data.join(''))
      start++
      if(check % 9 === 0) {
        check_answer.push(check)
      }
    }
  }
  answer = check_answer[0]
  for(let i = 0; i < check_answer.length; i++) {
    if(check_answer[i] < answer) {
      answer = check_answer[i]
    }
  }
  console.log(`Case #${n}: ${answer}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line
    question++
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(i+1, data[i])
    }
    process.exit(0);
});
