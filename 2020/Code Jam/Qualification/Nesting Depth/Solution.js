const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input_nesting = [];
let index_input_nesting = 0;
let question = 0;

const answer = (input_nesting,n) => {
    let check = []
    let temp_check = []
    for(let i=0;i<input_nesting.length;i++) {
        check[i] = input_nesting[i]
        temp_check[i] = input_nesting[i]
        for(let j=0;j<input_nesting[i];j++) {
            check[i] = '('+check[i]+')'
            temp_check[i] = check[i]
        }
    }
    for(let i=0;i<input_nesting.length - 1;i++) {
        if(parseInt(input_nesting[i]) >= parseInt(input_nesting[i+1]) 
        && parseInt(input_nesting[i+1]) !== 0) {
            check[i] = temp_check[i].slice(temp_check[i].length-check[i].length,-parseInt(input_nesting[i+1]))
            check[i+1] = temp_check[i+1].slice(parseInt(input_nesting[i+1]),temp_check[i+1].length)
        } else if(parseInt(input_nesting[i]) < parseInt(input_nesting[i+1]) 
        && parseInt(input_nesting[i+1]) !== 0) {
            check[i] = temp_check[i].slice(temp_check[i].length-check[i].length,parseInt(input_nesting[i])+1)
            check[i+1] = temp_check[i+1].slice(parseInt(input_nesting[i]),temp_check[i+1].length)
        }
    }
    console.log(`Case #${n}: ${check.join('')}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    input_nesting[index_input_nesting++] = line.split('')
    question++
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(input_nesting[i],i+1)
    }
    process.exit(0);
});