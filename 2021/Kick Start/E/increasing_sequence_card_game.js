// many input data 1 line
// 4
// SSSEEE
// N
// N3(S)N2(E)N
// 2(3(NW)2(W2(EE)W))
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let expect = 'begin';
let num_test_cases;
let data = [];
let index_data = 0;
let question = 0;
let score = 0

function heapPermutation(a, size, n) {
  let current = a[0]
  if (size == 1) {
    score++
    for(let i = 1; i < a.length; i++) {
      if(current < a[i]) {
        current = a[i]
        score++
      }
    }
  }

  for (let i = 0; i < size; i++) {
    heapPermutation(a, size - 1, n);

    if (size % 2 == 1) {
      let temp = a[0];
      a[0] = a[size - 1];
      a[size - 1] = temp;
    } else {
      let temp = a[i];
      a[i] = a[size - 1];
      a[size - 1] = temp;
    }
  }
}

const answer = (n, data) => {
  score = 0
  let card = [], factorial = 1
  for (let i = 0; i < data; i++) {
    card[i] = i
  }

  heapPermutation(card, card.length, card.length);

  for(let i = 2; i <= data; i++) {
    factorial *= i
  }

  console.log(`Case #${n}: ${score / factorial}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line.split('')
    question++
    if (question === num_test_cases) {
      rl.close()
    }
  }
}).on('close', () => {
  for (let i = 0; i < num_test_cases; i++) {
    answer(i + 1, parseInt(data[i].join('')))
  }
  process.exit(0);
});