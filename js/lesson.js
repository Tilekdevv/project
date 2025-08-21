const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const eurInput = document.querySelector("#eur");

const converter = (element) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const data = JSON.parse(request.response);
      if (element.id === "som") {
        usdInput.value = (element.value / data.usd).toFixed(2);
      }
      if (element.id === "usd") {
        somInput.value = (element.value * data.usd).toFixed(2);
      }
      if (element.id === "som") {
        eurInput.value = (element.value / data.eur).toFixed(2);
      }
      if (element.id === "usd") {
        eurInput.value = ((element.value * data.usd) / data.eur).toFixed(2);
      }
      if (element.id === "eur") {
        somInput.value = (element.value * data.eur).toFixed(2);
      }
      if (element.id === "eur") {
        usdInput.value = ((element.value * data.eur) / data.usd).toFixed(2);
      }
      if (element.value === "") {
        somInput.value = "";
        usdInput.value = "";
        eurInput.value = "";
      }
    };
  };
};

converter(somInput);
converter(usdInput);
converter(eurInput);

const name = "Tilek";
console.log("Loading");
console.log(name);
