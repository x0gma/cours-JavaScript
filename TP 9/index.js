// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable // J'ai besoin du Drapeau, du nom du pays, de la capitale et enfin de la population.

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
// let countries = [];

// async function fetchCountries() {
//   await fetch("https://restcountries.com/v3.1/all")
//     .then((res) => res.json())
//     .then((res) => (countries = res));

//   console.log(countries);
// }
const card = document.querySelector(".card");
let countries = [];

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((res) => {
      countries = res.map((country) => {
        return {
          flag: country.flags.png,
          flagAlt: country.flags.alt,
          name: country.name.common,
          capital: country.capital,
          population: country.population,
        };
      });
    });

  console.log(countries);
}

fetchCountries();

const countryDisplay = () => {
  card.innerHTML = countries
    .map((country) => {
      return `
      <li>
        <img src="${country.flag}" alt="${country.flagAlt}"></img>
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <span>${country.population}</span>
        </li>
        `;
    })
    .join("");
};

inputRange.addEventListener("input", (e) => {
  rangeValue.textContent = e.target.value;
  countryDisplay();
});
