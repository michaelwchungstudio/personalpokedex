var image1 = document.getElementById('image1');

// $.ajax({url:"https://fizal.me/pokeapi/api/" + 134 + ".json",
//   success: function(response){
//     pokeVaporeon = new Pokemon(response);
//     hello.push(pokeVaporeon);
//   }
// })
//
// $.ajax({url:"https://fizal.me/pokeapi/api/" + 135 + ".json",
//   success: function(response){
//     pokeJolteon = new Pokemon(response);
//     hello.push(pokeJolteon);
//   }
// })
//
// $.ajax({url:"https://fizal.me/pokeapi/api/136.json",
//   success: function(response){
//     pokeFlareon = new Pokemon(response);
//     hello.push(pokeFlareon);
//   }
// })

// TRAINER CLASS
class Trainer {
  constructor(arrayOfPokemon) {
    this.trainerPokemon = arrayOfPokemon;
  }

  addPokemon(pokeObj) {
    this.trainerPokemon.push(pokeObj);
  }

  all() {
    return trainerPokemon;
  }
}

// POKEMON CLASS
class Pokemon {
  constructor(idnum) {
    this.pokemonObject;
    this.pokemonID = idnum;
    this.healthPoints;
    this.attackPoints;
    this.defensePoints;
    this.pokemonSprite;
    this.pokemonAbilities;

    this.createPokemon(idnum);
  }

  createPokemon(idnum) {
    var that = this;

    $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
      type: "GET",
      success: function(response){
        that.pokemonObject = response;
        that.healthPoints = response.stats[5].base_stat;
        that.attackPoints = response.stats[4].base_stat;
        that.defensePoints = response.stats[3].base_stat;
        that.pokemonSprite = response.sprites.front_default;
        that.pokemonAbilities = [];

        for(let i = 0; i < response.abilities.length; i++) {
          that.pokemonAbilities.push(response.abilities[i].ability.name)
        }
      }
    })
  }
}

let pokeVaporeon = new Pokemon(134);
let pokeJolteon = new Pokemon(135);
let pokeFlareon = new Pokemon(136);

// ?
console.log(pokeVaporeon);
console.log(pokeVaporeon.pokemonAbilities);

var trainerMike = new Trainer([]);
trainerMike.addPokemon(pokeVaporeon);
trainerMike.addPokemon(pokeJolteon);
trainerMike.addPokemon(pokeFlareon);
console.log(trainerMike);
