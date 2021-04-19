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

const answer = (n, data) => {
  let answer = [1], count = 1
  for(let i = 1;i < data.length;i++) {
    if(data[i - 1].charCodeAt(0) < data[i].charCodeAt(0)) {
      count++
    } else {
      count = 1
    }
    answer.push(count)
  }
  console.log(`Case #${n}: ${answer.join(' ')}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line
        num_data[index_num_data++] = parseInt(input)
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
        answer(i+1, data[i][0])
    }
    process.exit(0);
})