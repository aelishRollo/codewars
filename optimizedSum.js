function f(n, m) {
    const d = Math.floor(n / m);
    const r = n % m;
    const fullBlockSum = (m - 1) * m / 2;
    const remainderSum = r * (r + 1) / 2;
    return d * fullBlockSum + remainderSum;
  }
