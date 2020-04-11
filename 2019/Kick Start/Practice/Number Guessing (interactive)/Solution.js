var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
answer = '';
a = 0
expect = 'begin';
rl.on('line', function(line) {
  if (expect === 'begin') {
    num_test_cases = parseInt(line);
    expect = 'lo_hi';
    case_counter = 0;
    answer = answer + line + ' begin1 '
  } else if (expect === 'lo_hi') {
    lo_hi = line.split(' ');
    head = parseInt(lo_hi[0]) + 1;
    tail = parseInt(lo_hi[1]);
    expect = 'num_tries';
    answer = answer + line + ' lo_hi '
  } else if (expect === 'num_tries') {
    num_tries = line; // not used.
    expect = 'solve';
    mid = parseInt((head + tail) / 2);
    console.log(mid);
    answer = answer + line + ' numtries '
  } else if (expect === 'solve') {
    if (line === 'CORRECT') {
        a = 1
        answer = answer + line + ' CORRECT' + '\n'
      ++case_counter === num_test_cases ? rl.close() : 0;
      expect = 'lo_hi';
    } else {
      line === 'TOO_SMALL' ? head = mid + 1 : tail = mid - 1;
      mid = parseInt((head + tail) / 2);
      console.log(mid);
    }
  }
}).on('close',function(){
    process.exit(0);
});