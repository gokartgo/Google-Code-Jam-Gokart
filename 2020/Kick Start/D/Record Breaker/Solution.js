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

const answer = (data,n) => {
  let max = 0
  let answer = 0
  for(let i=0; i < data.length; i++) {
    if(data.length === 1) {
      answer++
      break
    }
    if(i === 0) {
      if( parseInt(data[i]) > parseInt(data[i + 1]) ) {
        answer++
      }
    } else if(i === data.length - 1) {
      if(
        parseInt(data[i]) > parseInt(data[i - 1]) &&
        parseInt(data[i]) > max
      ) {
        answer++
      }
    } else {
      if(
        parseInt(data[i]) > parseInt(data[i-1]) &&
        parseInt(data[i]) > parseInt(data[i+1]) &&
        parseInt(data[i]) > max
      ) {
        answer++
      }
    }
    if(parseInt(data[i]) > max) {
      max = parseInt(data[i])
    }
  }
    
  console.log(`Case #${n}: ${answer}`)
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
        answer(data[i],i+1)
    }
    process.exit(0)
})