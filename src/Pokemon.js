import React from 'react'
import loading from "./assets/loading.gif"


export const Pokemon = ({ dados, image }) => {
  const pokemonType = dados.types.filter(d => d.type).map(p => p.type.name);

  const colours = {
    rock: '#B69E31',
    ghost: '#70559B',
    steel: '#B7B9D0',
    water: '#6493EB',
    grass: '#74CB48',
    psychic: '#FB5584',
    ice: '#9AD6DF',
    dark: '#75574C',
    fairy: '#E69EAC',
    normal: '#AAA67F',
    fighting: '#C12239',
    flying: '#A891EC',
    poison: '#A43E9E',
    ground: '#DEC16B',
    bug: '#A7B723',
    fire: '#F57D31',
    electric: '#F9CF30',
    dragon: '#7037FF'
  }

  return (
    <div className='pokemonFrame'>
      <p className='pokemonName'>{dados.name}</p>
      {!image ? <img src={loading} className="loadingGif" />
        : <img src={image} alt="" className='pokemonPhoto' />}

      <ul className='typeFather' style={{ justifyContent: pokemonType.length <= 1 ? 'center' : 'space-between' }}>
        {pokemonType.map(t => <li className='type' key={t} style={
          { backgroundColor: colours[t], padding: '10px 10px', borderRadius: '20px' }
        }>{t}</li>)}
      </ul>
    </div>
  )

}

