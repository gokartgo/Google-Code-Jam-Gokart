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

const answer = (n, num_data, k, data) => {
    let answer = 0
    let array_data = data.split('')
    let number = ''
    for(let i = 0; i < array_data.length; i++) {
      number += array_data[i].charCodeAt(0) - 96
    }
    let start_value = ''
    for(let i = 0; i < number.length; i++) {
      start_value += '1'
    }

    for(let i = parseInt(start_value); i < parseInt(number);) {
      let string_i = i+'', palindrome = true
      for(let j = 0; j < Math.ceil(num_data/2); j++) {
        if(
          parseInt(string_i[j]) > k ||
          parseInt(string_i[string_i.length - j - 1]) > k
        ) {
          console.log(i)
          if(parseInt(string_i[string_i.length - j - 1]) > k) {
            i += Math.pow(10, j + 1) -
            (parseInt(string_i[string_i.length - j - 1]) * Math.pow(10, j))
          } else {
            i += Math.pow(10, j + 1) -
            (parseInt(string_i[j]) * Math.pow(10, j))
          }
          console.log(i)
          console.log('-----------')
          palindrome = false
          break
        }
        if(
          parseInt(string_i[j]) === 0 ||
          parseInt(string_i[string_i.length - j - 1]) === 0 ||
          string_i[j] !== string_i[string_i.length - j - 1]
        ) {
          palindrome = false
          break
        }
      }

      if(palindrome) {
        answer++
      }

      i++
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
        data[index_data++] = line
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(i+1,num_data[i],find[i] , data[i])
    }
    process.exit(0);
});
