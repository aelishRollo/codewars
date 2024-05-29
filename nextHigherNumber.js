function nextHigher(n) {
    let c = n;
    let c0 = 0;
    let c1 = 0;
    
    // Count trailing zeroes (c0) and ones (c1)
    while (((c & 1) === 0) && (c !== 0)) {
        c0++;
        c >>= 1;
    }
    while ((c & 1) === 1) {
        c1++;
        c >>= 1;
    }

    // If n == 111...0000 in binary, then there is no higher number with same number of 1s.
    if (c0 + c1 === 31 || c0 + c1 === 0) {
        return -1;
    }

    // Position of rightmost non-trailing zero
    let pos = c0 + c1;

    // Flip the rightmost non-trailing zero (position pos)
    n |= (1 << pos);

    // Clear all bits to the right of pos
    n &= ~((1 << pos) - 1);

    // Insert (c1-1) ones on the right.
    n |= (1 << (c1 - 1)) - 1;

    return n;
}
