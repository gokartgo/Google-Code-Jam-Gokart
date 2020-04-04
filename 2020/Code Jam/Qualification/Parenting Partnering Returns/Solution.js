const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let input_num_time = [];
let input_time = [];
let index_input_num_time = 0;
let question = 0;
let check = 0
const answer = (input_time,n) => {
    let sort_input_time = input_time.slice()
    sort_input_time = sort_input_time.sort((time_a,time_b) => {
        const check = parseInt(time_a[0]) - parseInt(time_b[0])
        if(check !== 0) {
            return check
        } else {
            return parseInt(time_a[1]) - parseInt(time_b[1])
        }
    })
    const C = [[-1,-1]]
    const J = [[-1,-1]]
    let index_C = 0
    let index_J = 0
    let before_C = 0
    let before_J = 0
    let answer = ''
    for(let i=0;i<input_time.length;i++) {
        let int_sort_input_time_0 = parseInt(sort_input_time[i][0])
        let int_sort_input_time_1 = parseInt(sort_input_time[i][1])
        if(int_sort_input_time_0 >= C[before_C][1]) {
            C[index_C][0] = int_sort_input_time_0
            C[index_C][1] = int_sort_input_time_1
            index_C++
            C[index_C] = [[-1,-1]]
            before_C = index_C-1
        } else if(int_sort_input_time_0 >= J[before_J][1]) {
            J[index_J][0] = int_sort_input_time_0
            J[index_J][1] = int_sort_input_time_1
            index_J++
            J[index_J] = [[-1,-1]]
            before_J = index_J-1
        } else {
            answer = 'IMPOSSIBLE'
            break
        }
    }
    index_C = 0
    index_J = 0
    if(answer === '') {
        for(let i=0;i<input_time.length;i++) {
            for(let j=0;j<C.length;j++) {
                if(parseInt(input_time[i][0]) === C[j][0] &&
                parseInt(input_time[i][1]) === C[j][1]) {
                    answer += 'C'
                    index_C++
                    C[j] = [-1,-1]
                    break
                }
            }
            for(let j=0;j<J.length;j++) {
                if(parseInt(input_time[i][0]) === J[j][0] &&
                parseInt(input_time[i][1]) === J[j][1]) {
                    answer += 'J'
                    index_J++
                    J[j] = [-1,-1]
                    break
                }
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
    if(check === 0) {
        input = parseInt(line)
        check = 1
    } else {
        input_num_time[index_input_num_time++] = line.split(' ')
        if(index_input_num_time === input) {
            input_time[question] = input_num_time
            input_num_time = []
            check=0
            index_input_num_time=0
            question++
        }
    }
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(input_time[i],i+1)
    }
    process.exit(0);
});