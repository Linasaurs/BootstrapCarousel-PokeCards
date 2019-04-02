var firstCraouselContainerId = 'genI';

function cloneCarousel(index) {
	var containerId = 'gen' + index;
	var carouselId = 'gen' + index + '-carousel';

	var firstCarouselContainer = document.getElementById(firstCraouselContainerId);
	var carouselContainer = firstCarouselContainer.cloneNode(true);

	carouselContainer.id = containerId;
	carouselContainer.querySelector('.carousel').id = carouselId;
	carouselContainer.querySelectorAll('.carousel-indicators li').forEach(function (indicator) {
		indicator.setAttribute('data-target', '#' + carouselId);
	});
	carouselContainer.querySelectorAll('.carousel-control').forEach(function (control) {
		control.setAttribute('href', '#' + carouselId);
	});

	document.getElementById("main").appendChild(carouselContainer);
}


function populateCarousel(index, data) {
	var containerId = 'gen' + index;
	var carouselContainer = document.getElementById(containerId);
	carouselContainer.querySelectorAll('.item').forEach(function (item, index) {
		item.querySelector('img').setAttribute('src', data[index].img);
		item.querySelector('.poketype-text').innerHTML = data[index].type;
		item.querySelector('.logoimg').setAttribute('src', data[index].typeLogo);
		item.querySelector('.pokename-title').innerHTML = data[index].name;
		item.querySelector('.extrainfo-gen').innerHTML = data[index].gen;
		item.querySelector('.extrainfo-hp').innerHTML = data[index].hp + " HP";
	});
}

cloneCarousel('II');
cloneCarousel('III');



var pokemons = [{
		name: "Charmender",
		img: "./img/charmander.png",
		type: "Fire",
		typeLogo: "./img/fire.png",
		gen: "Gen I",
		hp: 200
	},

	{
		name: "Bulbasaur",
		img: "./img/bulbasaur.png",
		type: "Grass",
		typeLogo: "./img/grass.png",
		gen: "Gen I",
		hp: 100
	},

	{
		name: "Squirtle",
		img: "./img/squirtle.png",
		type: "Water",
		typeLogo: "./img/water.png",
		gen: "Gen I",
		hp: 250
	}
];

var pokemons2 = [{
    name: "Chikorita",
    img: "./img/Chikorita.png",
    type: "Grass",
    typeLogo: "./img/grass.png",
    gen: "Gen II",
    hp: 200
  },

  {
    name: "Totodile",
    img: "./img/Totodile.png",
    type: "Water",
    typeLogo: "./img/water.png",
    gen: "Gen II",
    hp: 100
  },

  {
    name: "Cyndaquil",
    img: "./img/cyndaquil.png",
    type: "Fire",
    typeLogo: "./img/fire.png",
    gen: "Gen II",
    hp: 250
  }
];

var pokemons3 = [
	{
	  name: "Mudkip",
	  img: "./img/mudkip.png",
	  type: "Water",
	  typeLogo: "./img/water.png",
	  gen: "Gen III",
	  hp: 100
	},
	
	{
    name: "Treecko",
    img: "./img/treecko.png",
    type: "grass",
    typeLogo: "./img/grass.png",
    gen: "Gen III",
    hp: 200
  },


  {
    name: "Torchic",
    img: "./img/torchic.png",
    type: "Fire",
    typeLogo: "./img/fire.png",
    gen: "Gen III",
    hp: 250
  }
];

populateCarousel('I', pokemons);
populateCarousel('II', pokemons2);
populateCarousel('III', pokemons3);