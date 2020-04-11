const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let additional = [];
let index_additional = 0;
let time = [];
let index_time = 0;
let input_minute = [];
let index_input_minute = 0;
let question = 0;
let check = 1

const answer = (time,additional,input_minute,n) => {
    let max = [0,0]
    let sum
    for(let i=0;i<time-1;i++) {
        sum = 0
        sum = parseInt(input_minute[i+1]) - parseInt(input_minute[i])
        if(sum > max[0]) {
            max[1] = max[0]
            max[0] = sum
        }else if(sum > max[1] && sum <= max[0]) {
            max[1] = sum
        }
    }
    max[0] = Math.ceil(max[0] / 2)
    if(max[0] > max[1]) {
        console.log(`Case #${n}: ${max[0]}`)
    } else {
        console.log(`Case #${n}: ${max[1]}`)
    }
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line.split(' ')
        time[index_time++] = parseInt(input[0])
        additional[index_additional++] = parseInt(input[1])
        check = 2
    } else {
        input_minute[index_input_minute++] = line.split(' ')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(time[i],additional[i],input_minute[i],i+1)
    }
    process.exit(0);
});