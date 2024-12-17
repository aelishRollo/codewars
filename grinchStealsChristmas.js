Date.prototype.getDate = function getGrinchDate() {
    let words = this.toDateString().split(' ')
    console.log(words)
    if (words[1] === 'Dec' && words[2] === '25') {
      return 26
    } else {
      return Number(words[2])
    }
  }
