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

const answer = (n, data)  => {
  let answer = '\n'
  for(let i = 0; i < parseInt(data[0]) * 2 + 1; i++) {
    for(let j = 0; j < parseInt(data[1]) * 2 + 1; j++) {
      if(i <= 1 && j <= 1) {
        answer += '.'
      } else if(i % 2 == 0 && j % 2 == 0) {
        answer += '+'
      } else if(i % 2 == 0 && j % 2 == 1) {
        answer += '-'
      } else if(i % 2 == 1 && j % 2 == 0) {
        answer += '|'
      } else if(i % 2 == 1 && j % 2 == 1) {
        answer += '.'
      }
    }
    answer += '\n'
  }
  console.log(`Case #${n}: ${answer}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line.split(' ')
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