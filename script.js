const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      id: 1,
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American"
    },
    {
      id: 2,
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American"
    },
    {
      id: 3,
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American"
    },
    {
      id: 4,
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial"
    },
    {
      id: 5,
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English"
    },
    {
      id: 6,
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English"
    },
    {
      id: 7,
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal"
    },
    {
      id: 8,
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial"
    },
    {
      id: 9,
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale"
    },
    {
      id: 10,
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American"
    },
  ]
}

const rootElement = document.querySelector('#main')


const Cardcomponent = (beers) => {

  return beers.cards.map((card) => `
    <div class="card-cointainer">
      <div class="card">
      <div class="circle">${card.id}</div>
        <p class="title">${card.title}</p>
        <hr>
        <p class="sub">${card.sub}</p>
        <p class="text">${card.text}</p>
        <button>
          <span class="button-text">details</span>
          <span class="material-symbols-outlined arrow">arrow_forward</span>
        </button>
      </div>
    </div>
  `
  ).join('')
 
}

rootElement.insertAdjacentHTML('beforeend', Cardcomponent(beers))
