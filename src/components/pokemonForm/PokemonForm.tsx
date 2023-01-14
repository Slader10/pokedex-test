import { useState } from "react";
import Button from "../inputs/Button";
import RangeInput from "../inputs/RangeInput"
import TextInput from "../inputs/TextInput"
import { PokemonDataInterface } from "./PokemonFormContainer";

interface PokemonFormDataInterface {
    data: PokemonDataInterface,
    handleOnChange(key: string, value: string | number): void,
    isValid(): boolean
}

const PokemonForm = ({ data, isValid, handleOnChange }: PokemonFormDataInterface) => {
    return <div className="form-container bordered">
        <h2 className="title text-center">Nuevo Pokemon</h2>
        <div className="row cols-2 m-top align-center">
            <div className="col order-1 order-mb-1">
                <TextInput label="Nombre"
                    onChange={value => handleOnChange("name", value)}
                />
            </div>
            <div className="col order-3 order-mb-2">
                <RangeInput label="Ataque"
                    value={data.atack}
                    onChange={(x) => handleOnChange("atack", x)}
                />
            </div>
            <div className="col order-2 order-mb-3">
                <TextInput label="Imagen"
                    onChange={value => handleOnChange("image", value)}
                />
            </div>
            <div className="col order-4 order-mb-4">
                <RangeInput label="Defensa"
                    value={data.defense}
                    onChange={(x) => handleOnChange("defense", x)}
                />
            </div>
        </div>
        <div className="form-actions">
            <Button disabled={!isValid()}>Guardar</Button>
            <Button>Cancelar</Button>
        </div>
    </div>
}

export default PokemonForm