//import { usePokemon } from "../hooks/usePokemon"
//import { BuscarPokemon } from "./BuscarPokemon"

import { useState } from "react"


export const PokemonApp = () => {

    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")

    /*const handleAgregarPokemon = () =>{
        setName("Gengar")
    }*/

    const reqPokemon = () => {
        try {
             fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp)=>{
                 resp.json().then((data)=>{
                    const {id, name, sprites, types} = data
                    console.log(id,name, sprites.other['official-artwork'].front_default,["types"])
                    setUrl(sprites.other['official-artwork'].front_default)
                    setId(id)
                    //console.log({data})
                })
            })
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
    <>
    <h1>Id: {id}</h1>
    <h1>Nombre: {name}</h1>
    <img src={url}></img>
    <input className="form-control me-2" type="text" onChange={(e)=>{setName(e.target.value)}}></input>
    <button onClick={reqPokemon}>PokemonApp</button>
    </>
  )
}

/*export const PokemonApp = () => {
    const{handleGetPokemon, arregloPokemon} = usePokemon()
    
    
    return (
        <>
              <BuscarPokemon handleGetPokemon = {handleGetPokemon}/>
        </>
    )
}*/
