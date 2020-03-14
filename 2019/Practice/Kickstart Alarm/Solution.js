const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input_num = [];
let question = 0;
let N = [], K = [], x1 = [], y1 = [], C = [], D = [], E1 = [], E2 = [], F = [];
let POWER = []

const answer = (N,K,x1,y1,C,D,E1,E2,F,question) => {
    let A = [];
    A[0] = (x1+y1)%F;
    x = x1;
    y = y1;
    for(let i=1;i<N;i++) {
      let tempX = x
      x = (C * x + D * y + E1) % F
      y = (D * tempX + C * y + E2) % F
      A[i] = (x+y)%F
    }
    let sum = 0
    for(let i=1;i<=K;i++) {
      for(let j=0;j<N;j++) {
        for(let k=0; k<N-j; k++) {
          for(let l=k; l<=k+j; l++) {
            sum = ( sum + A[l] * Math.pow((l-k+1) ,i) ) % 1000000007
          }
        }
      }
    }
    console.log(`Case #${question}: ${sum}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    input_num = line.split(' ')
    N[question] = parseInt(input_num[0])
    K[question] = parseInt(input_num[1])
    x1[question] = parseInt(input_num[2])
    y1[question] = parseInt(input_num[3])
    C[question] = parseInt(input_num[4])
    D[question] = parseInt(input_num[5])
    E1[question] = parseInt(input_num[6])
    E2[question] = parseInt(input_num[7])
    F[question] = parseInt(input_num[8])
    question++
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(N[i],K[i],x1[i],y1[i],C[i],D[i],E1[i],E2[i],F[i],i+1)
    }
    process.exit(0);
});