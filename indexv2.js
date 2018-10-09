var submitButton = document.getElementById('subbutton');
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

function createPokemon(idnum) {
  $.ajax({url:"https://fizal.me/pokeapi/api/" + idnum + ".json",
    success: function(response){
      pokemonSprite.style.backgroundImage = "url(" + response.sprites.front_default; + ")";
      pokeID.innerText = "ID: " + response.id;
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
  (createPokemon(Math.floor(Math.random() * 807)));
});

submitButton.addEventListener('click', function() {
  var pokeIDNum = document.getElementById('idinput').value;

  createPokemon(pokeIDNum);
});

vapButton.addEventListener('click', function() {
  createPokemon(134);
})

joltButton.addEventListener('click', function() {
  createPokemon(135);
})

flareButton.addEventListener('click', function() {
  createPokemon(136);
})
