import React from 'react'

const PokeName = ({pokemon}) => {
    return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
        <div className="card-header"><img src="#" /><b>{" "+pokemon.name}</b></div>
        <div className="card-body">          
                           
        </div>
      </div>
    )
};

export default PokeName

//<img src={pokemon.sprites['front_default']} />
//<img src={pokemon.sprites['back_default']} /> 
//<PokeCard pokemon={pokemon} />