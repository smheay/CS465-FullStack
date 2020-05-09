// Enter your code here

let div = document.getElementById("results");

for (let number = 1; number <= 100; ++number) {

  if(number % 3 === 0 && number % 5 === 0){
    div.append(`FIZZBUZZ `);
  }
  else if(number % 3 === 0 ){
    div.append(`fizz `);
  }
  else if(number % 5 === 0 ){
    div.append(`buzz  `);
  }
  else div.append(`${number} `);
}
