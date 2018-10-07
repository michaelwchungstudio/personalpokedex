class Pokemon{
    constructor(ajaxNumber){
        this.name;
        this.hp;
        this.attack;
        this.defense;
        this.abilities = [];
        this.getPokemon(ajaxNumber);
    }
    getPokemon(ajaxNumber){
        var that = this
        $.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
        success: function(result){
                    that.hp = result.stats[5].base_stat
                    that.attack = result.stats[4].base_stat
                    that.defense = result.stats[3].base_stat
                    that.abilities = [];

                    for(let i = 0 ; i< result.abilities.length;i++){
                            that.abilities.push(result.abilities[i].ability.name)
                        }
                }
        })
    }
}

var pokeVaporeon = new Pokemon(134);
console.log(pokeVaporeon);
