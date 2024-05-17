
function createPhoneNumber(numbers) {
    let result = "("
    for (let i = 0; i < 10; i++) {
        if (i == 3) {
            result += ") "
        } else if (i == 6) {
            result +="-"
        }
        result += numbers[i]
    }
    return result
}
