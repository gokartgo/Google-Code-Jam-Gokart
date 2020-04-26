const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let move = [];
let index_move = 0;
let question = 0;
let word = '';

const answer = (move,index,repeat,n) => {
  let repeat_local = repeat
  let word = ''
  for(let i=index;i<move.length;i++) {
    if(move[i] === '') {
      continue
    }
    if(move[i].match(/[1-9]/)) {
      repeat_send = parseInt(move[i])
      move[i] = ''
    }else if(move[i] === '(') {
      move[i] = ''
      word += answer(move,i+1,repeat_send,n)
    }else if(move[i] === ')') {
      move[i]=''
      return word.repeat(repeat_local)
    }else {
      word += move[i]
      move[i] = ''
    }
  }
  let w = 1,h = 1
  for(let i=0;i<word.length;i++) {
    if(word[i] === 'S') {
      h++
    }
    if(word[i] === 'E') {
      w++
    }
    if(word[i] === 'N') {
      h--
    }
    if(word[i] === 'W') {
      w--
    }
  }
  if(w<=0) {
    w = 1000000000 + w
  } 
  if(h <= 0) {
    h = 1000000000 + h
  }
  console.log(`Case #${n}: ${w} ${h}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    move[index_move++] = line.split('')
    question++
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(move[i],0,1,i+1)
    }
    process.exit(0);
});