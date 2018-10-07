var submitButton = document.getElementById('subbutton');
var pokemonSprite = document.getElementById('pokesprite');
var pokeName = document.getElementById('pokename');
var pokeHP = document.getElementById('pokehp');
var pokeAttack = document.getElementById('pokeattack');
var pokeDefense = document.getElementById('pokedef');
var pokeAbilities = document.getElementById('pokeabilities');

function createPokemon(idnum) {
  $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
    success: function(response){
      pokemonSprite.style.backgroundImage = "url(" + response.sprites.front_default; + ")";
      pokeName.innerText = "Name: " + response.name.charAt(0).toUpperCase() + response.name.slice(1);
      pokeHP.innerText = "HP: " + response.stats[5].base_stat;
      pokeAttack.innerText = "Attack: " + response.stats[4].base_stat;
      pokeDefense.innerText = "Defense: " + response.stats[3].base_stat;

      var abil = "";

      for(let i = 0; i < response.abilities.length; i++) {
        if(i == response.abilities.length-1) {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ".")
        }
        else {
          abil += (response.abilities[i].ability.name.charAt(0).toUpperCase() + response.abilities[i].ability.name.slice(1) + ", ");

        }
      }

      pokeAbilities.innerText = "Abilities: " + abil;
    }
  })
}

window.addEventListener('load', function() {
  (createPokemon(Math.floor(Math.random() * 721)));
});

subbutton.addEventListener('click', function() {
  var pokeIDNum = document.getElementById('idinput').value;

  createPokemon(pokeIDNum);
});

// class Pokemon{
//     constructor(ajaxNumber){
//         this.name;
//         this.hp;
//         this.attack;
//         this.defense;
//         this.abilities = [];
//         this.getPokemon(ajaxNumber);
//     }
//     getPokemon(ajaxNumber){
//         var that = this
//         $.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
//         success: function(result){
//                     that.hp = result.stats[5].base_stat
//                     that.attack = result.stats[4].base_stat
//                     that.defense = result.stats[3].base_stat
//                     that.abilities = [];
//
//                     for(let i = 0 ; i< result.abilities.length;i++){
//                             that.abilities.push(result.abilities[i].ability.name)
//                         }
//                 }
//         })
//     }
// }
//
// var pokeVaporeon = new Pokemon(134);
// console.log(pokeVaporeon);
// console.log(pokeVaporeon.attack);
