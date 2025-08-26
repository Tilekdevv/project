//Phone checking
const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/;
phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "ok";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "error";
    phoneResult.style.color = "red";
  }
};

//tab slider

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
  tabContentBlocks.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tab_content_item_active");
  });
};
const showTabContent = (i = 0) => {
  tabContentBlocks[i].style.display = "block";
  tabs[i].classList.add("tab_content_item_active");
};
hideTabContent();
showTabContent();

let tabIndex = 0;
const tabCount = tabs.length;

const scrollTabContent = () => {
  hideTabContent();
  if (tabIndex < tabCount - 1) {
    tabIndex++;
  }
  showTabContent(tabIndex);
};

const interval = setInterval(scrollTabContent, 3000);
tabParent.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabs.forEach((tab, index) => {
      if (event.target === tab) {
        hideTabContent();
        showTabContent(index);
      }
    });
  }
  clearInterval(interval);
};

//Convertor
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

//Card switcher
const card = document.querySelector(".card");
const btnContainer = document.querySelector(".inner_card_switcher");

let cardId = 1;
const firstCard = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${cardId}`
    );
    const data = await response.json();
    card.innerHTML = `
            <p>${data.title}</p>   
            <p style="color: ${data.completed ? "green" : "red"}">${
      data.completed
    }</p>   
            <span>${data.id}</span>   
            `;
  } catch (error) {
    console.error(error);
  }
};
firstCard(cardId);
btnContainer.onclick = (event) => {
  if (event.target.tagName.toLowerCase() === "button") {
    if (event.target.id === "btn-next") {
      cardId < 200 ? cardId++ : (cardId = 1);
    } else if (event.target.id === "btn-prev") {
      cardId > 1 ? cardId-- : (cardId = 200);
    }
    firstCard(cardId);
  }
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

// WEATHER

// http://api.openweathermap.org/data/2.5/weather
// query params = параметры запроса

const citySearchInput = document.querySelector(".cityName");
const cityName = document.querySelector(".city");
const cityTemp = document.querySelector(".temp");

const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_ID = "e417df62e04d3b1b111abeab19cea714";
const citySearch = () => {
  citySearchInput.oninput = async (event) => {
    try {
      const response = await fetch(
        `${BASE_URL}?q=${event.target.value}&appid=${API_ID}`
      );
      const data = await response.json();
      cityName.innerHTML = data.name || "City is not defined";
      cityTemp.innerHTML = data.main?.temp
        ? Math.round(data.main?.temp - 273) + "&deg;C"
        : "///";
    } catch (error) {
      console.log(error);
    }
  };
};

citySearch();
