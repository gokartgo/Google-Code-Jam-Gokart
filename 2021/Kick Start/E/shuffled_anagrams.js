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
let find = true;
let result = []

function heapPermutation(a, size, n, check) {
  // if size becomes 1 then prints the obtained
  // permutation
  if (size == 1) {
    for(let i = 0; i < a.length;i++) {
      result[i] = a[i]
      if(a[i] === check[i]) {
        return
      }
    }
    find = false
  }

  for (let i = 0; i < size; i++) {
    if(find) {
      heapPermutation(a, size - 1, n, check);
    } else {
      return
    }

    // if size is odd, swap 0th i.e (first) and
    // (size-1)th i.e (last) element
    if (size % 2 == 1) {
      let temp = a[0];
      a[0] = a[size - 1];
      a[size - 1] = temp;
    }

    // If size is even, swap ith
    // and (size-1)th i.e last element
    else {
      let temp = a[i];
      a[i] = a[size - 1];
      a[size - 1] = temp;
    }
  }
}

const answer = (n, data) => {
  result = []
  find = true
  let check_deplicate = [], check = []

  for(let i = 0;i<26;i++) {
    check_deplicate[i] = 0
  }

  for(let i = 0;i<data.length;i++) {
    check[i] = data[i]
    check_deplicate[data[i].charCodeAt(0) - 97]++
  }

  for(let i = 0;i<check_deplicate.length;i++) {
    if(check_deplicate[i] > parseInt(data.length / 2)) {
      console.log(`Case #${n}: IMPOSSIBLE`)
      return
    }
  }

  heapPermutation(data, data.length, data.length, check);
  console.log(`Case #${n}: ${result.join('')}`)
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
    answer(i + 1, data[i])
  }
  process.exit(0);
});