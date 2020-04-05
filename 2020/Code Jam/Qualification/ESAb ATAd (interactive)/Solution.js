var readline = require('readline');
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let answer = '';
let index = 0;
let question = 0;
let expect = 'begin';
let digit = 1
let input = []
rl.on('line', function(line) {
  if (expect === 'begin') {
    input = line.split(' '); // 100 10
    expect = 'question'
  } else if (expect === 'question' && line != 'Y') {
      answer += line
      index++ 
  }
  if(index === parseInt(input[1])) {
    console.log(answer)
    answer = ''
    index = 0
    question++
    digit = 1
  } else {
    console.log(digit)
    digit++
  }
  if(question === parseInt(input[0])) {
    rl.close()
  }
}).on('close',function(){
    process.exit(0);
});