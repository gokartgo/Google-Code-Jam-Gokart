const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input_pattern = [];
let input_num_pattern = []
let index_input_num_pattern = 0;
let question = 0;
let check = 0;

const answer = (input_pattern,n) => {
    for(let i = 0;i<input_pattern.length - 1;i++) {
        let first,second,first_index,second_index;
        if (input_num_pattern[i].length > input_num_pattern[i+1].length) {
            first = input_num_pattern[i].length
            first_index = i
            second = input_num_pattern[i+1].length
            second_index = i+1
        } else {
            first = input_num_pattern[i+1].length
            first_index = i+1
            second = input_num_pattern[i].length
            second_index = i
        }
        let answer = ''
        for(let k = first-1;k>=0;k--) {
            if(input_num_pattern[first_index][k] == input_num_pattern[second][second_index]) {
                second_index--
            } else {
                if(input_num_pattern[second_index][k])
            }
        }
    }
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check === 0) {
        input = parseInt(line)
        check = 1
    } else {
        input_num_pattern[index_input_num_pattern++] = line
        if(index_input_num_pattern === input) {
            input_pattern[question] = input_num_pattern
            input_num_pattern = []
            check=0
            index_input_num_pattern=0
            question++
        }
    }
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(input_pattern[i],i+1)
    }
    process.exit(0);
});