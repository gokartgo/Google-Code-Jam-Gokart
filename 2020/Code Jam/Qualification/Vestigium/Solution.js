const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let input_num_table = [];
let input_table = [];
let rows = []
let index_input_table = 0;
let question = 0;
let check = 0
const answer = (input_table,n) => {
    const diagonal_length = input_table[0].length
    let arr_check_row = []
    let arr_check_column = []
    let sum = 0
    let check_row = 0
    let check_column = 0
    let row = 0
    let column = 0
    for(let i=0;i<diagonal_length;i++) {
        sum += parseInt(input_table[i][i])
    }
    for(let i=0;i<diagonal_length;i++) {
        arr_check_row = []
        arr_check_column = []
        check_row = 0
        check_column = 0
        for(let j=0;j<diagonal_length;j++) {
            if(check_row === 0 && arr_check_row[parseInt(input_table[i][j]) - 1] !== 0) {
                arr_check_row[parseInt(input_table[i][j]) - 1] = 0
            } else {
                check_row++
            }
            if(check_column === 0 && arr_check_column[parseInt(input_table[j][i]) - 1] !== 0) {
                arr_check_column[parseInt(input_table[j][i]) - 1] = 0
            } else {
                check_column++
            }
            if(check_row !== 0 && check_column !== 0) {
                break
            }
        }
        if(check_row !== 0) {
            row++
        }
        if(check_column !== 0) {
            column++
        }
    }
    console.log(`Case #${n}: ${sum} ${row} ${column}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check === 0) {
        input = line
        rows[question] = input
        check = 1
    } else {
        input_num_table[index_input_table++] = line.split(' ')
        if(index_input_table === parseInt(rows[question])) {
            input_table[question] = input_num_table
            input_num_table = []
            check=0
            index_input_table=0
            question++
        }
    }
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(input_table[i],i+1)
    }
    process.exit(0);
});