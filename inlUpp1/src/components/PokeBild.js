import React from 'react'

const PokeBild = ({pokemon}) => {
    return (
        <div className="card text-center mx-auto" style={{"maxWidth" : "18rem"}} key={pokemon.id}>
        <div className="card-header"><b><img src={pokemon.sprites['front_default']} /></b></div>
        <div className="card-body">          
                           
        </div>
      </div>
    )
};

export default PokeBild