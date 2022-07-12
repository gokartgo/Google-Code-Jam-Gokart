// 2 input question 1 line multiple input data 1 line
// example input
// 3
// 3 10
// 3 7 2
// 4 100
// 11 10 5 50
// 1 1
// 1
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
let find = [];
let index_find = 0;
let data = [];
let index_data = 0;
let question = 0;
let check = 1

const answer = (n, num_data, find, data) => {
  let answer = 0
  const length_median = parseInt(num_data) - parseInt(find)
  const data_number = data.map(a => parseInt(a))
  const data_sort = data_number.sort((a,b) => a - b)

  let a = data_sort[parseInt(length_median / 2)]
  if(length_median % 2 == 1) {
    a += data_sort[parseInt(length_median / 2) + 1]
    answer = answer + (a / 2)
  } else {
    answer += a
  }

  for(let i = length_median + 1; i < data_sort.length; i++) {
    answer += data_sort[i]
  }
  console.log(`Case #${n}: ${answer}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line.split(' ')
        num_data[index_num_data++] = parseInt(input[0])
        find[index_find++] = parseInt(input[1])
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
        answer(i+1,num_data[i], find[i], data[i])
    }
    process.exit(0);
});