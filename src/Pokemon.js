import React from 'react'
import loading from "./assets/loading.gif"


export const Pokemon = ({dados, carregando}) => {
  return (
    <div className='pokemonFrame'>
        <p className='pokemonName'>{dados.name}</p>
        {carregando ? <img src={loading} /> : <img src={dados.sprites.front_default} alt="" className='pokemonPhoto'/>}
    </div>
  )
}

