// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set

function trilingualDemocracy(group) {
    if (group[0] === group[1] && group[0] === group[2]) {
      return group[0];
    } else if (group[0] !== group[1] && group[0] !== group[2] && group[1] !== group[2]) {
      return ['D', 'F', 'I', 'K'].find(lang => !group.includes(lang));
    } else {
      return group[0] === group[1] ? group[2] : group[0] === group[2] ? group[1] : group[0];
    }
  }
  
  //written from my phone lol
  