import React from 'react'
import  ReactDOM  from 'react-dom/client'

const Data = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((resolve) => {
      return resolve.json()
    })
    .then((data) => {
      return data;
    
    //   console.log(data.name)
    })
}
// console.log(Data());
export default Data;