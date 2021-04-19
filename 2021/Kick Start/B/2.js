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
let data = [];
let index_data = 0;
let question = 0;
let check = 1

const answer = (n, data) => {
  let prepare = [], prepare_index = 0,
  arithmetic_number = data[1] - data[0],
  arithmetic_count = 1,max = 0

  for(let i=0;i<data.length;i++) {
    data[i] = parseInt(data[i])
  }

  for(let i=0;i<data.length;i++) {
    arithmetic_number = data[i+1] - data[0]
    arithmetic_count = 1
    let temp,temp_index,change = false

    for(let j=i+1;j<data.length;j++) {
      if(data[j] - data[j - 1] === arithmetic_number) {
        arithmetic_count++
      } else if(!change) {
        temp_index = j
        temp = data[j]
        data[j] = data[j - 1] + arithmetic_number
        change = true
        arithmetic_count++
      } else {
        if(arithmetic_count > max) {
          max = arithmetic_count
        }
        break
      }
      if(arithmetic_count > max) {
        max = arithmetic_count
      }
    }
    data[temp_index] = temp
  }

  for(let i=data.length - 1;i>=0;i--) {
    arithmetic_number = data[i] - data[i-1]
    arithmetic_count = 1
    let temp,temp_index,change = false

    for(let j=i;j>0;j--) {
      if(data[j] - data[j - 1] === arithmetic_number) {
        arithmetic_count++
      } else if(!change) {
        temp_index = j - 1
        temp = data[j - 1]
        data[j - 1] = data[j] - arithmetic_number
        change = true
        arithmetic_count++
      } else {
        if(arithmetic_count > max) {
          max = arithmetic_count
        }
        break
      }
      if(arithmetic_count > max) {
        max = arithmetic_count
      }
    }
    data[temp_index] = temp
  }
  
  console.log(`Case #${n}: ${max}`)
}

rl.on('line', (line) => {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'question';
  } else if (expect === 'question') {
    if(check % 2 === 1) {
        input = line
        num_data[index_num_data++] = parseInt(input)
        check = 2
    } else {
        data[index_data++] = line.split(' ')
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
})
// const readline = require('readline');
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// let expect = 'begin';
// let num_test_cases;
// let input = [];
// let num_data = [];
// let index_num_data = 0;
// let data = [];
// let index_data = 0;
// let question = 0;
// let check = 1

// const answer = (n, data) => {
//   let prepare = [], prepare_index = 0
//   arithmetic_number = data[1] - data[0],
//   arithmetic_count = 1

//   prepare[0] = []
//   prepare[0][0] = 0
//   for(let i = 1;i<data.length;i++) {
//     if(data[i] - data[i - 1] === arithmetic_number) {
//       arithmetic_count++
//       prepare[prepare_index][1] = arithmetic_number
//       prepare[prepare_index][2] = arithmetic_count
//     } else {
//       arithmetic_count = 2
//       arithmetic_number = data[i] - data[i - 1]
//       prepare_index++
//       prepare[prepare_index] = []
//       prepare[prepare_index][0] = i - 1
//       prepare[prepare_index][1] = arithmetic_number
//       prepare[prepare_index][2] = arithmetic_count
//     }
//   }

//   let max = prepare[0][2]
//   if(prepare.length === 2) {
//     if(prepare[1][2] > prepare[0][2]) {
//       max = prepare[1][2]
//     }
//     max++
//   } else if(prepare.length === 3) {
//     for(let i=0;i<3;i++) {
//       if(prepare[i][2] > max) {
//         max = prepare[i][2]
//       }
//     }
//     max++
//   } else {
//     for(let i = 0;i<prepare.length - 3;i++) {
//       if(prepare[i][1] === prepare[i+3][1] &&
//         prepare[i][2] + prepare[i+3][2] + 1 > max) {
//           max = prepare[i][2] + prepare[i+3][2] + 1
//       }
//     }
//   }
//   console.log(`Case #${n}: ${max}`)
// }

// rl.on('line', (line) => {
//   if (expect === 'begin') {
//     num_test_cases = parseInt(line);
//     expect = 'question';
//   } else if (expect === 'question') {
//     if(check % 2 === 1) {
//         input = line
//         num_data[index_num_data++] = parseInt(input)
//         check = 2
//     } else {
//         data[index_data++] = line.split(' ')
//         check = 1
//     }
//     question++
//     if(question === num_test_cases*2) {
//         rl.close()
//     }
//   }
// }).on('close',() => {
//     for(let i=0;i<num_test_cases;i++) {
//         answer(i+1, data[i])
//     }
//     process.exit(0);
// })