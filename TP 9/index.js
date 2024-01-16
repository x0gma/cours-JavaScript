const card = document.querySelector(".card");
let countries = [];
let countriesRange = [];

const countryDisplay = (tab) => {
  card.innerHTML = tab
    .map((country) => {
      return `
      <li>
        <img src="${country.flag}" alt="${country.flagAlt}"></img>
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <span>Population : ${country.population}</span>
        </li>
        `;
    })
    .join("");
};

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((res) => {
      countries = res.map((country) => {
        return {
          flag: country.flags.png,
          flagAlt: country.flags.alt,
          name: country.translations.fra.common,
          capital: country.capital,
          population: country.population,
        };
      });
    });
  countries.sort((a, b) => b.population - a.population);
  countriesRange = countries.slice(0, 24);
  countryDisplay(countriesRange);
}

fetchCountries();

inputSearch.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  let countriesSearch = countriesRange;

  countriesSearch = countriesRange.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm);
  });
  countryDisplay(countriesSearch);
});

inputRange.addEventListener("input", (e) => {
  rangeValue.textContent = e.target.value;
  countriesRange = countries.slice(0, parseInt(e.target.value));
  countryDisplay([...countriesRange]);
});

minToMax.addEventListener("click", () => {
  countriesRange.sort((a, b) => a.population - b.population);
  countryDisplay(countriesRange);
});

maxToMin.addEventListener("click", () => {
  countriesRange.sort((a, b) => b.population - a.population);
  countryDisplay(countriesRange);
});

alpha.addEventListener("click", () => {
  countriesRange.sort((a, b) => a.name.localeCompare(b.name));
  countryDisplay(countriesRange);
});
