const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let num_peak = [];
let index_num_peak = 0;
let peak = [];
let index_peak = 0;
let question = 0;
let check = 1

const answer = (num_peak,peak,n) => {
    let answer = 0,start = parseInt(peak[0])
    for(let i=0;i<num_peak-2;i++) {
        if(parseInt(peak[i]) < parseInt(peak[i+1]) && 
        parseInt(peak[i+1]) > parseInt(peak[i+2])) {
            answer++
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
        num_peak[index_num_peak++] = parseInt(input)
        check = 2
    } else {
        peak[index_peak++] = line.split(' ')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(num_peak[i],peak[i],i+1)
    }
    process.exit(0);
});