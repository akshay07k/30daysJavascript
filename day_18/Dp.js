// Fibonacci Series⬇︎
function fibonacciDP(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let fibo = new Array(n);
    fibo[0] = 0;
    fibo[1] = 1;

    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo;
}

const n = 7;
console.log(`Fibonacci series up to ${n} terms:`, fibonacciDP(n));


