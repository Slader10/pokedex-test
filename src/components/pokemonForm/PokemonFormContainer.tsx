import { useState } from "react"
import PokemonForm from "./PokemonForm"

export interface PokemonDataInterface {
    name: string;
    atack: number;
    image: string;
    defense: number;
}

const initvalues: PokemonDataInterface = {
    name: "",
    atack: 50,
    image: "",
    defense: 50
}

const formValidation = (): boolean => {
    return initvalues.name !== "" || initvalues.image !== ""
}

const PokemonFormContainer = () => {
    const [pokemonData, setPokemonData] = useState<PokemonDataInterface>(initvalues)

    const handleOnChange = (key: string, value: string | number) => {
        setPokemonData(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }
    return <PokemonForm
        data={pokemonData}
        handleOnChange={handleOnChange}
        isValid={formValidation}
    />
}
export default PokemonFormContainer