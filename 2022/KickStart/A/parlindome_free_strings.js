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

function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}

const answer = (n, data) => {
 // if (data.length < 5) {
 //   console.log(`Case #${n}: IMPOSSIBLE`)
 //   return
 // }
  let check = '', index_convert = [], max = 0, isPalindome = false
  for(let i = 0; i < data.length; i++) {
    if(data[i] === '?'){
      check += '1'
      index_convert.push(i)
    }
  }
  if(check.length > 0) {
    max = parseInt(check, 2)
  }
  if (max === 0 && data.length >= 5) {
    if(checkPalindrom(data)){
      console.log(`Case #${n}: IMPOSSIBLE`)
      return
    } 
  }

  for(let i = 0; i <= max; i++) {
    let data_convert = data.split('')
    let base2 = i.toString(2).split('')
    
    for(let j = 0; j < index_convert.length; j++) {
      data_convert[index_convert[index_convert.length - j - 1]] = base2.length > 0 ? base2.pop() : '0'
    }
    
    isPalindome = false
    for(let j = 0; j < data.length - 4; j++) {
      for(let k = j + 5; k <= data.length; k++) {
        let data_sub = data_convert.join('').substring(j,k)
        if(checkPalindrom(data_sub)) {
          isPalindome = true
          break
        }         
      }
      if(isPalindome) {
        break
      }
    }

    if(!isPalindome) {
      break
    }
  }

  if(!isPalindome) {
    console.log(`Case #${n}: POSSIBLE`)
  } else {
    console.log(`Case #${n}: IMPOSSIBLE`)
  }
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
        answer(i+1, data[i])
    }
    process.exit(0);
});
