const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let expect = 'begin';
let num_test_cases;
let input = [];
let num_house = [];
let num_money = [];
let input_price = [];
let index_num_house = 0;
let index_num_money = 0;
let index_input_price = 0;
let question = 0;
let check = 1

const answer = (num_house,num_money,input_price,n) => {
    // let sort_price = input_price.sort((a,b) => parseInt(a) - parseInt(b))
    let answer = 0
    let contain_price = []
    for(let i=0;i<num_house;i++) {
        if(!contain_price[parseInt(input_price[i])]) {
            contain_price[parseInt(input_price[i])] = 1
        } else {
            contain_price[parseInt(input_price[i])]++
        }
    }
    for(let i=0;i<contain_price.length;i++) {
        if(!contain_price[i]) {
            continue
        }
        while(contain_price[i] !== 0) {
            num_money -= i
            contain_price[i]--
            if(num_money >= 0) {
                answer++
            } else {
                break
            }
        }
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
        num_house[index_num_house++] = input[0]
        num_money[index_num_money++] = input[1]
        check = 2
    } else {
        input_price[index_input_price++] = line.split(' ')
        check = 1
    }
    question++
    if(question === num_test_cases*2) {
        rl.close()
    }
  }
}).on('close',() => {
    for(let i=0;i<num_test_cases;i++) {
        answer(num_house[i],num_money[i],input_price[i],i+1)
    }
    process.exit(0);
});