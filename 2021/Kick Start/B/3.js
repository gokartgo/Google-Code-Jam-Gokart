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
  let base = parseInt(Math.sqrt(data)),
  before = 2,after = 3,check,is_prime = true, i = 5

  while(!check || after * check <= data) {
    is_prime = true
    for(let j = 3;j < i;j+=2) {
      if(i % j === 0) {
        is_prime = false
        break
      }
    }

    if(is_prime) {
      check = i

      if(after * check <= data) {
        before = after
        after = check
      }
    }
    i+=2
  }

  console.log(`Case #${n}: ${before * after}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = parseInt(line)
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