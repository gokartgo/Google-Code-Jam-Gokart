const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let num_bus = [];
let index_num_bus = 0;
let last_day = [];
let index_last_day = 0;
let bus = [];
let index_bus = 0;
let question = 0;
let check = 1

const answer = (num_bus,last_day,bus,n) => {
    let clone_bus = []
    for(let i=0;i<num_bus;i++) {
        bus[i] = parseInt(bus[i])
        clone_bus[i] = bus[i]
    }
    let sequence = 1,answer,finish=false
    for(let i=0;i<num_bus;i++) {
       if(bus[i] < last_day) {
           bus[i] = bus[i]*parseInt(last_day/bus[i])
       }
    }

    for(let i=num_bus-1;i>=0;i--) {
        if(bus[i] >= bus[i-1]) {
            continue
        }
        bus[i-1] = clone_bus[i-1] * parseInt(bus[i]/clone_bus[i-1])
    }
    console.log(`Case #${n}: ${bus[0]}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line.split(' ')
        num_bus[index_num_bus++] = parseInt(input[0])
        last_day[index_last_day++] = parseInt(input[1])
        check = 2
    } else {
        bus[index_bus++] = line.split(' ')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(num_bus[i],last_day[i],bus[i],i+1)
    }
    process.exit(0);
});