const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let data = [];
let index_data = 0;
let question = 0;

const answer = (data,n) => {
  let answer = 'IMPOSSIBLE';
  const east = parseInt(data[0])
  const north = parseInt(data[1])
  const peppurr = data[2]
  index_x = 1000+east
  index_y = 1000+north
  start_x = 1000
  start_y = 1000
  for(let i=0;i<peppurr.length;i++) {
    if(peppurr[i] == 'N') {
      index_y += 1
    }
    if(peppurr[i] == 'S') {
      index_y -= 1
    }
    if(peppurr[i] == 'E') {
      index_x += 1
    }
    if(peppurr[i] == 'W') {
      index_x -= 1
    }
    if(start_x < index_x  && Math.abs(index_x - start_x) > Math.abs(index_y - start_y)) {
      start_x+=1
    } else if(start_y < index_y  && Math.abs(index_y - start_y) > Math.abs(index_x - start_x)) {
      start_y+=1
    } else if(start_y > index_y && Math.abs(index_y - start_y) > Math.abs(index_x - start_x)) {
      start_y-=1
    } else if(start_x > index_x && Math.abs(index_x - start_x) > Math.abs(index_y - start_y)){
      start_x-=1
    }
    if( (start_x === index_x && start_y === index_y) ||
    (Math.abs(1000 - index_x) + Math.abs(1000 - index_y) === 
    Math.abs(1000 - start_x) + Math.abs(1000 - start_y) ) ){
      answer = i + 1
      break
    }
    // console.log(start_x,index_x,start_y,index_y)
  }
  console.log(`Case #${n}: ${answer}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    data[index_data++] = line.split(' ')
    question++
    if(question === num_test_cases) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(data[i],i+1)
    }
    process.exit(0);
});