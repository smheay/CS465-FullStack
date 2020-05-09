const url = "https://pokeapi.co/api/v2/pokemon/";

function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let getDataAsync = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log("Data", data);
  

    data.results.forEach((item) => {
      document.getElementById("results").innerHTML += `${upperFirst(
        item.name
      )} `;
    });

    if (data.next !== null) getDataAsync(data.next);

  } catch (error) {
    console.log("Request failed", error);
  }
};

getDataAsync(url);


