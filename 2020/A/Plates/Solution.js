const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let input_num_plant = [];
let input_plant = [];
let rows = []
let columns = []
let plants = []
let index_input_plant = 0;
let question = 0;
let check = 0
let max = 0
const answer = (rows,columns,plants,input_plant,index_row,index_column,sum,sequence) => {
    for(let i=index_row;i<rows;i++) {
        console.log('*',sequence,plants,index_row,index_column,input_plant[index_row][index_column])
        if(sequence === plants || index_column === columns || index_row === rows){
            sum = sum + parseInt(input_plant[index_row][index_column])
            if(sum > max) {
                max = sum
            }
            console.log('return',input_plant[index_row][index_column],sum)
            return
        }
        if(sequence < plants) {
            sum = sum + parseInt(input_plant[index_row][index_column])
            if(index_column < columns - 1) {
                answer(rows,columns,plants,input_plant,index_row,index_column+1,sum,sequence+1)
            }
            console.log('******',i,sequence,index_row,rows,`${sum} + ${input_plant[index_row][index_column]}`)
            if(index_row < rows - 1) {
                answer(rows,columns,plants,input_plant,i+1,0,sum,sequence+1)
            }
            sum = sum - parseInt(input_plant[index_row][index_column])
        }
    }
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check === 0) {
        input = line.split(' ')
        rows[question] = input[0]
        columns[question] = input[1]
        plants[question] = input[2]
        check = 1
    } else {
        input_num_plant[index_input_plant++] = line.split(' ')
        if(index_input_plant === parseInt(rows[question])) {
            input_plant[question] = input_num_plant
            input_num_plant = []
            check=0
            index_input_plant=0
            question++
        }
    }
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        max = 0
        for(let j=0;j<rows[i];j++) {
            answer(
                parseInt(rows[i])
                ,parseInt(columns[i])
                ,parseInt(plants[i])
                ,input_plant[i]
                ,j // index_row
                ,0 // index_column
                ,0 // sum
                ,1)
        }
        console.log(`Case #${i+1}: ${max}`)
    }
    process.exit(0);
});