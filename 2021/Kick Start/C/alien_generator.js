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

// const answer = (n,data) => {
//   let answer = 0
//   for(let i=1; i <= data;i++) {

//   }
//   console.log(`Case #${n}: ${answer}`)
// }

const answer = (n,data) => {
  let answer = 0
  for(let i=1; i <= data;i++) {
    let sum = 0
    for(let j=i; j <= data;j++) {
      sum+=j
      if(sum === data) {
        console.log(i)
        answer++
      }
      if(sum > data) {
        break
      }
    }
  }
  console.log(`Case #${n}: ${answer}`)
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
    for(let i=10925;i<=10925;i++) {
        answer(i,i)
    }
    process.exit(0);
});