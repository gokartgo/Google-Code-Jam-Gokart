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
let check = []
let N
let A
let B
let C
let find = true
let result = []

function check_condition(tower) {
  let check_A = 1
  let check_B = 1
  let max_a = tower[0]
  let max_b = tower[tower.length - 1]

  for(let i = 0;i<tower.length - 1;i++) {
    if(tower[i] <= tower[i+1] && max_a <= tower[i+1]) {
      check_A++
      max_a = tower[i+1]
    }
  }
  for(let i = tower.length - 1;i > 0;i--) {
    if(tower[i] <= tower[i-1] && max_b <= tower[i-1]) {
      check_B++
      max_b = tower[i-1]
    }
  }
  if(check_A === A && check_B === B) {
    find = false
    result = [...tower]
  }
}

function permutation(number, count, level, size) {
  if (level == size) {
    let check_answer = []
    for (let j = 0; j < size; j++) {
      check_answer.push(check[j])
    }
    check_condition(check_answer)
    return
  }
  for (let i = 0; i < size; i++) {
    if (count[i] == 1) {
      continue
    }
    check[level] = number[i]
    count[i]++
    permutation(number, count, level + 1, size)
    if(!find) {
      return
    }
    count[i]--
  }
}

const answer = (n, data) => {
  N = parseInt(data[0])
  A = parseInt(data[1])
  B = parseInt(data[2])
  C = parseInt(data[3])
  let count = []
  let tower = []
  if (A + B - C > N || N !== 1 && A === 1 && B === 1 && C === 1) {
    console.log(`Case #${n}: IMPOSSIBLE`)
    return
  }
  for (let i = 0; i < N; i++) {
    if(i < N - C) {
      tower[i] = i + 1
    } else {
      tower[i] = N
    }
    count[i] = 0
  }
  permutation(tower, count, 0, N)
  console.log(`Case #${n}: ${result.join(' ')}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line.split(' ')
    question++
    if (question === num_test_cases) {
      rl.close()
    }
  }
}).on('close', () => {
  for (let i = 0; i < num_test_cases; i++) {
    check = []
    result = []
    find = true
    answer(i + 1, data[i])
  }
  process.exit(0);
});