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
    let prefix = ''
    let suffix = ''
    let answer = ''
    for(let i=0;i<input_pattern.length;i++) {
        let set_prefix = true
        let set_suffix = true
        for(let j=input_pattern[i].length - 1;j>=0;j--) {
            if(set_suffix && 
            suffix[suffix.length - 1 - input_pattern[i].length + j + 1] !== input_pattern[i][j]) {
                if(input_pattern[i][j] !== '*') {
                    suffix = input_pattern[i][j] + suffix
                } else {
                    set_suffix = false
                }
            }
            if(set_prefix &&
                prefix[input_pattern[i].length - j - 1] !== input_pattern[i][input_pattern[i].length - j - 1]) {
                if(input_pattern[i][input_pattern[i].length - j - 1] !== '*') {
                    prefix = prefix + input_pattern[i][input_pattern[i].length - j - 1]
                } else {
                    set_prefix = false
                }
            }
        }
    }
    answer = prefix + suffix
    for(let i=0;i<input_pattern.length;i++) {
        for(let j=input_pattern[i].length - 1;j>=0;j--) {
            if(input_pattern[i][j] !== '*' && suffix[suffix.length - 1 - input_pattern[i].length + j + 1] !== input_pattern[i][j]) {
                answer = '*'
            }
            if(input_pattern[i][j] === '*') {
                break
            }
        }
        for(let j=0;j<input_pattern[i].length;j++) {
            if(input_pattern[i][j] !== '*' && prefix[j] !== input_pattern[i][j]) {
                answer = '*'
            }
            if(input_pattern[i][j] === '*') {
                break
            }
        }
        if(answer === '*') {
            break
        }
    }
    console.log(`Case #${n}: ${answer}`)
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