//Forma explicita de definir clases
/*
export class Pokemon {
    public id: number;
    public name: string;

    constructor(id:number,name:string){
        this.id= id;
        this.name=name;
        console.log('constructor llamado')
    }
}
*/
// otro ejemplo de clase (FORMA CORTA)

import axios from "axios";
import { Move,PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

    get imageURL():string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
        public readonly id:number, 
        public name:string,
        //public imageURL: string
    ){}

    //Metodos
    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves(): Promise<Move[]>{
        //const moves=10;
        //desestructuración de los datos
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves[0].move.name)

        return data.moves;
    }
}
    
export const charmander = new Pokemon(4,'Charmander')

console.log(charmander)

//Llamada de metodos

//console.log(charmander.getMoves())
//charmander.scream();
//charmander.speak();
charmander.getMoves();