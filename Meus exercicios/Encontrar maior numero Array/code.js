let arr = [1, 6, 2, 10, 2, 241];
let maiorNumero = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > maiorNumero) {
    maiorNumero = arr[i];
  }
}

console.log(maiorNumero);
