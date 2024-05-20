function gap(num) {
    let binary = num.toString(2);
    let longestGap = 0;
    let currentGap = 0;
    let inGap = false;

    for (let digit of binary) {
        if (digit === '1') {
            if (inGap) {
                if (currentGap > longestGap) {
                    longestGap = currentGap;
                }
                currentGap = 0;
            }
            inGap = true;
        } else if (inGap) {
            currentGap++;
        }
    }

    return longestGap;
}
