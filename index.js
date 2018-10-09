var pokemonSprite = document.getElementById('currentpokesprite');
var pokeID = document.getElementById('pokeid');
var pokeName = document.getElementById('pokename');
var pokeHP = document.getElementById('pokehp');
var pokeAttack = document.getElementById('pokeattack');
var pokeDefense = document.getElementById('pokedef');
var pokeAbilities = document.getElementById('pokeabilities');
var vapButton = document.getElementById('vapbutton');
var joltButton = document.getElementById('joltbutton');
var flareButton = document.getElementById('flarebutton');

let pokeVaporeon;
let pokeJolteon;
let pokeFlareon;

var listOfPokemon = [];
var pokeCount = 0;

class Trainer {
  constructor(arrayOfPokemon) {
    this.trainerPokemon = arrayOfPokemon;
  }

  getPokemon(searchName) {
    for(let i = 0; i < this.trainerPokemon.length; i++) {
      if(this.trainerPokemon[i].pokemonName == searchName) {
        return this.trainerPokemon[i];
      }
    }
  }

  all() {
    return trainerPokemon;
  }
}

class Pokemon {
  constructor(pokeObject) {
    this.pokemonName = pokeObject.name;
    this.pokemonID = pokeObject.id;
    this.healthPoints = pokeObject.stats[5].base_stat;
    this.attackPoints = pokeObject.stats[4].base_stat;
    this.defensePoints = pokeObject.stats[3].base_stat;
    this.pokemonSprite = pokeObject.sprites.front_default;

    var abil = "";

    for(let i = 0; i < pokeObject.abilities.length; i++) {
      if(i == pokeObject.abilities.length-1) {
        abil += (pokeObject.abilities[i].ability.name.charAt(0).toUpperCase() + pokeObject.abilities[i].ability.name.slice(1) + ".")
      }
      else {
        abil += (pokeObject.abilities[i].ability.name.charAt(0).toUpperCase() + pokeObject.abilities[i].ability.name.slice(1) + ", ");
      }
    }

    this.pokemonAbilities = abil;
  }
}

function createVaporeon() {
  $.ajax({url:"https://fizal.me/pokeapi/api/134.json",
      async: false,
      type: "GET",
      success: function(response){
        pokeVaporeon = new Pokemon(response);
        listOfPokemon.push(pokeVaporeon);
    }})
}

function createJolteon() {
  $.ajax({url:"https://fizal.me/pokeapi/api/135.json",
      async: false,
      type: "GET",
      success: function(response){
        pokeJolteon = new Pokemon(response);
        listOfPokemon.push(pokeJolteon);
    }})
}

function createFlareon() {
  $.ajax({url:"https://fizal.me/pokeapi/api/136.json",
      async: false,
      type: "GET",
      success: function(response){
        pokeFlareon = new Pokemon(response);
        listOfPokemon.push(pokeFlareon);
    }})
}

function displayPokemon(pokeObject) {
  pokemonSprite.style.backgroundImage = "url(" + pokeObject.pokemonSprite + ")";
  pokeID.innerText = "ID: " + pokeObject.pokemonID;
  pokeName.innerText = "Name: " + pokeObject.pokemonName.charAt(0).toUpperCase() + pokeObject.pokemonName.slice(1);
  pokeHP.innerText = "HP: " + pokeObject.healthPoints;
  pokeAttack.innerText = "Attack: " + pokeObject.attackPoints;
  pokeDefense.innerText = "Defense: " + pokeObject.defensePoints;
  pokeAbilities.innerText = "Abilities: " + pokeObject.pokemonAbilities;
}

createVaporeon();
createJolteon();
createFlareon();

let mikeTrainer = new Trainer(listOfPokemon);

window.addEventListener('load', function() {
  displayPokemon(pokeVaporeon);
});

vapButton.addEventListener('click', function() {
  displayPokemon(pokeVaporeon);
})

joltButton.addEventListener('click', function() {
  displayPokemon(pokeJolteon);
})

flareButton.addEventListener('click', function() {
  displayPokemon(pokeFlareon);
})
