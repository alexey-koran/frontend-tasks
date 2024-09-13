console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

await Promise.resolve().then(() => console.log(4));

Promise.resolve().then(() => setTimeout(() => console.log(5)));

await Promise.resolve().then(() => console.log(6));

Promise.resolve().then(() => console.log(7));

setTimeout(() => console.log(8));

console.log(9);

// 1, 3, 4, 6, 9, 7, 2, 5, 8
