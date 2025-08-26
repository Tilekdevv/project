const cardsBlock = document.querySelector(".cardsBlock");

const cardsData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    data.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <div class="cardImg"><img src="${post.image}" alt="cardImg"></div>
                <h5>${post.title}</h5>
                <p>${post.description}</p>
                `;
      cardsBlock.appendChild(card);
    });
  } catch (err) {
    console.log(err);
  }
};
cardsData();
