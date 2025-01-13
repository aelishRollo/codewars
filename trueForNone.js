function none(arr, fun) {

    if (arr.every((el) => fun(el) === false)) {
      return true
    } else {
      return false
    }
  }
  