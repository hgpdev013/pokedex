import React from 'react'
import loading from "./assets/loading.gif"


export const Pokemon = ({dados, image}) => {
  const pokemonType = dados.types.filter(d => d.type).map(p => p.type.name)


  return (
    <div className='pokemonFrame'>
        <p className='pokemonName'>{dados.name}</p>
        {!image ? <img src={loading} className="loadingGif"/> 
        : <img src={image} alt="" className='pokemonPhoto'/>}
        <ul className='typeFather'>
          {pokemonType.map(
            t => <li className={'type'} key={t} style={
              {backgroundColor: t === 'rock' ? '#B69E31' : 
                (t === "ghost" ? '#70559B' : 
                (t === "steel" ? '#B7B9D0' : 
                (t === "water" ? '#6493EB' :
                (t === "grass" ? '#74CB48' :
                (t === "psychic" ? '#FB5584' :
                (t === "ice" ? '#9AD6DF' :
                (t === "dark" ? '#75574C' :
                (t === "fairy" ? '#E69EAC' :
                (t === "normal" ? '#AAA67F' :
                (t === "fighting" ? '#C12239' :
                (t === "flying" ? '#A891EC' :
                (t === "poison" ? '#A43E9E' :
                (t === "ground" ? '#DEC16B' :
                (t === "bug" ? '#A7B723' :
                (t === "fire" ? '#F57D31' :
                (t === "electric" ? '#F9CF30' : '#7037FF')))))))))))))))),
                padding: '10px 10px',
                borderRadius: '20px'
              }
            }> {t} </li>
          )}
        </ul>
    </div>
  )

}

