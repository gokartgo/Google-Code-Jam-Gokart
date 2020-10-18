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

const answer = (n,data) => {
  let start = [], start_index = 0, kick = [], kick_index = 0, answer = 0
  for(let i = data.length - 5; i >= 0; i--) {
    if(
      data[i] === 'S' &&
      data[i+1] === 'T' &&
      data[i+2] === 'A' &&
      data[i+3] === 'R' &&
      data[i+4] === 'T'
    ) {
      start_index++
      kick_index = 0
    }
    if(
      data[i] === 'K' &&
      data[i+1] === 'I' &&
      data[i+2] === 'C' &&
      data[i+3] === 'K'
    ) {
      kick_index = 1
      answer += kick_index * start_index
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
        answer(i+1,data[i])
    }
    process.exit(0);
});