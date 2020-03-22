const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let input_num_training = []
let input_training = []
let index_input_num_training = 0
let index_input_training = 0
let expect = 'begin'
let check = 1
let question = 0
const answer = (N,P,student,question) => {
  const intStudent = student.map(s => parseInt(s)).sort((a,b) => b-a)
  let min = Infinity
  // small
  // for(let i=0;i<=intStudent.length - P;i++) {
  //   let start = intStudent[i]
  //   let countP = 0
  //   let time = 0
  //   for(let j=i;j<intStudent.length;j++) {
  //     if(countP === P) {
  //       break;
  //     }
  //     time += (start-intStudent[j])
  //     countP++
  //   }
  //   if(min > time) {
  //     min = time
  //   }
  // }

  // big  = Σ(S[i] - S[j]) where j = i to i + P -1
  //      = P × S[i] - Σ(S[j]) where j = i to i + P - 1
  sumSj = 0
  for(let i=0;i<P;i++) {
    sumSj += intStudent[i]
  }
  for(let i=0;i<=intStudent.length - P;i++) {
    let time = intStudent[i]*P - sumSj
    if(min > time) {
      min = time
    }
    sumSj -= intStudent[i]
    sumSj += intStudent[i+P]
  }
  console.log(`Case #${question}: ${min}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input_num_training[index_input_num_training++] = line.split(' ')
        check = 2
    } else {
        input_training[index_input_training++] = line.split(' ')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(
          parseInt(input_num_training[i][0]),
          parseInt(input_num_training[i][1]),
          input_training[i],
          i+1
        )
    }
    process.exit(0);
});