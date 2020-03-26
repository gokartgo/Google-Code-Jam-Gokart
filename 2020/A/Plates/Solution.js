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
let plants_fix
let index_input_plant = 0;
let question = 0;
let check = 0
let debug = [0,0,0]
const answer = (rows,columns,plants,input_plant,index_row,index_column,n,sequence,word) => {
    // console.log('index',a)
    for(let i=index_row;i<rows;i++) {
        if(plants > 0) {
            // debug[index_column] = input_plant[i][index_column]
            word+=i
            plants--
        } 
        if(plants === 0){
            console.log(word)
            word = word.slice(0, -1)
            return
        }
        if(plants > 0) {
            answer(rows,columns+1,plants,input_plant,index_row,index_column+1,n,sequence+1,word)
            answer(rows,columns+1,plants,input_plant,i+1,0,n,sequence+1,word)
        }
        plants++
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
        plants_fix = plants[i]
        answer(
        parseInt(rows[i])
        ,parseInt(columns[i])
        ,parseInt(plants[i])
        ,input_plant[i]
        ,0
        ,0
        ,i+1
        ,1
        ,'')
    }
    process.exit(0);
});