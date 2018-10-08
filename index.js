var image1 = document.getElementById('image1');
var trainer1 = [1, 2, 3]
var hello = [];

let pokeVaporeon = {};

class Pokemon {
  constructor(pokeObject) {
    this.pokemonObject = pokeObject
    this.pokemonID = pokeObject.id
    this.healthPoints = pokeObject.stats[5].base_stat;
    this.attackPoints = pokeObject.stats[4].base_stat;
    this.defensePoints = pokeObject.stats[3].base_stat;
    // this.pokemonSprite;
    // this.pokemonAbilities;
  }

  // createPokemon(idnum) {
  //   var that = this;
  //
  //   $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
  //     type: "GET",
  //     success: function(response){
  //       that.pokemonObject = response;
  //       that.healthPoints = response.stats[5].base_stat;
  //       that.attackPoints = response.stats[4].base_stat;
  //       that.defensePoints = response.stats[3].base_stat;
  //       that.pokemonSprite = response.sprites.front_default;
  //       that.pokemonAbilities = [];
  //
  //       for(let i = 0; i < response.abilities.length; i++) {
  //         that.pokemonAbilities.push(response.abilities[i].ability.name)
  //       }
  //     }
  //   })
  // }
}


$.ajax({url:"https://fizal.me/pokeapi/api/" + 134 + ".json",
  // async: false,
  success: function(response){
    pokeVaporeon = new Pokemon(response);
    hello.push(pokeVaporeon);
  }
})

console.log(hello);



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

// var pokeVaporeon = new Pokemon(134);
// var pokeJolteon = new Pokemon(135);
// var pokeFlareon = new Pokemon(136);
//
// // ?
// console.log(pokeVaporeon);
// console.log(pokeVaporeon.pokemonAbilities);
//
// var trainerMike = new Trainer([]);
// trainerMike.addPokemon(pokeVaporeon);
// trainerMike.addPokemon(pokeJolteon);
// trainerMike.addPokemon(pokeFlareon);
// console.log(trainerMike);
