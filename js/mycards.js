const cardsBlock = document.querySelector(".cardsBlock");

const cardsData = async () => {
  try {
    const response = await fetch("../data/characters.json");
    const data = await response.json();
    data.forEach((character) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
                <div class="cardImg"><img src="${character.person_photo}" alt="cardImg"></div>
                <h4>${character.name}</h4>
                <h6>${character.age}</h6>
                <p>${character.quote}</p>
                `;
      cardsBlock.appendChild(card);
    });
  } catch (err) {
    console.log(err);
  }
};
cardsData();
