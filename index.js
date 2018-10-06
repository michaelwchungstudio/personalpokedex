var pokeVaporeon = {};
var pokeJolteon = {};
var pokeFlareon = {};
var hello = [];

var image1 = document.getElementById('image1');

// AJAX CALL FOR 134 - VAPOREON
// $.ajax({url:"https://pokeapi.co/api/v2/pokemon/134/",
//   success: function(response){
//     console.log(response)
//   }
// })

$.ajax({url:"https://fizal.me/pokeapi/api/134.json",
  success: function(response){
    pokeVaporeon = new Pokemon(response);
    console.log(pokeVaporeon);
    hello.push(pokeVaporeon);
  }
})

// AJAX CALL FOR 135 - JOLTEON
// $.ajax({url:"https://pokeapi.co/api/v2/pokemon/" + 135 + "/",
//   success: function(response){
//     console.log(response)
//   }
// })
//
//
// $.ajax({url:"https://fizal.me/pokeapi/api/" + 135 + ".json",
//   success: function(response){
//     pokeVaporeon = new Pokemon(response);
//     console.log(pokeVaporeon);
//     console.log(pokeVaporeon.pokemonSprite)
//   }
// })
//
// // AJAX CALL FOR 136 - FLAREON
// // $.ajax({url:"https://pokeapi.co/api/v2/pokemon/136/",
// //   success: function(response){
// //     console.log(response)
// //   }
// // })
//
// $.ajax({url:"https://fizal.me/pokeapi/api/136.json",
//   success: function(response){
//     pokeFlareon = new Pokemon(response);
//     console.log(pokeFlareon)
//
//   }
// })
//
// // TRAINER CLASS
// // class Trainer {
// //   constructor(arrayOfPokeObj) {
// //     this.trainerPokemon = arrayOfPokeObj;
// //   }
// //
// //   all() {
// //     return
// //   }
// // }
//
// POKEMON CLASS
console.log(hello);

class Pokemon {
  constructor(pokemonobj) {
    this.pokemonObject = pokemonobj;
    this.pokemonID = pokemonobj.id;
    this.healthPoints = pokemonobj.stats[5].base_stat;
    this.attackPoints = pokemonobj.stats[4].base_stat;
    this.defensePoints = pokemonobj.stats[3].base_stat;
    this.pokemonSprite = pokemonobj.sprites.front_default;
    this.pokemonAbilities = [];

    for(let i = 0; i < pokemonobj.abilities.length; i++) {
      this.pokemonAbilities.push(pokemonobj.abilities[i].ability.name)
    }
  }
}
//
// function changeName(x) {
//   pokeName.innerHTML = x.name;
// }
//
// function whatever(x){
//     whoever(x)
// }
//
// function whoever(y){
//   a = new Pokemon(y)
//   console.log(a.pokemonObject.pokemonID)
// }
//
//
// console.log(a)
// console.log(pokeVaporeon.pokemonSprite);
// // image1.backgroundImage = "url("" + pokeVaporeon.pokemonSprite + "")";
