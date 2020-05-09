const url = "https://restcountries.eu/rest/v2/all";

// Enter your code here

fetch(url)
.then(response => {
console.log('Request successful', response);
return response.json();
})
.then(data => {
console.log('Data', data);
data.forEach(item => {
document.getElementById("results").innerHTML += (`${item.name}, ${item.population.format()}  <br>`);
  });
})
.catch(error => {
console.log('Request failed', error);
});

//help from fullstack
Number.prototype.format = function(){
    return this.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
 };