const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let expect = 'begin';
let num_test_cases;
let data = [];
let index_data = 0;
let question = 0;

const answer = (n, data) => {
  let default_index = [], sort = [], sort_data = '',
  sort_data_left = '', sort_data_right = '', answer = []

  for(let i = 0;i<26;i++) {
    sort[i] = 0
    default_index[i] = []
  }

  for(let i = 0;i<data.length;i++) {
    sort[data[i].charCodeAt(0) - 97]++
    default_index[data[i].charCodeAt(0) - 97].push(i)
  }

  for(let i = 0;i<sort.length;i++) {
    if(sort[i] > parseInt(data.length / 2)) {
      console.log(`Case #${n}: IMPOSSIBLE`)
      return
    }
  }

  for(let i = 0;i<26;i++) {
    if(sort[i] > 0) {
      for(let j = 0;j < sort[i];j++) {
        sort_data += String.fromCharCode(97 + i)
      }
    }
  }
  
  sort_data_left = sort_data.substring(0, parseInt(sort_data.length / 2))
  sort_data_right = sort_data.substring(parseInt(sort_data.length / 2), sort_data.length)

  let temp = sort_data_left
  sort_data_left = sort_data_right.substring(0, parseInt(sort_data.length / 2))
  sort_data_right = sort_data.length % 2 === 0 ? temp : sort_data_right[sort_data_right.length - 1] + temp

  sort_data = sort_data_left + sort_data_right

  let index = 0

  for(let i = 0; i < 26;i++) {
    for(let j = 0; j < default_index[i].length; j++) {
      answer[default_index[i][j]] = sort_data[index++]
    }
  }

  console.log(`Case #${n}: ${answer.join('')}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line.split('')
    question++
    if (question === num_test_cases) {
      rl.close()
    }
  }
}).on('close', () => {
  for (let i = 0; i < num_test_cases; i++) {
    answer(i + 1, data[i])
  }
  process.exit(0);
});