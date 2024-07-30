export const pokemonsID= [1,20,30,34,66];

interface Pokemon{
    id: number;
    name: string;
    age ?: number;
}

// ejemplo de objeto
export const bulbasaur:Pokemon= {
    id:1,
    name:'Bulbasaur'
}

export const charmander:Pokemon={
    id: 4,
    name: "Charmander"
}

export const pokemons: Pokemon[] =[];

pokemons.push(charmander,bulbasaur)

console.log(pokemons)

/*
//transforma el string a number
pokemonsID.push(+'1')
console.log(pokemonsID);
*/