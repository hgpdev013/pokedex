import React from 'react'
import {Pokemon} from './Pokemon'
import "./App.css"

const App = () => {


  const [carregando, setCarregando] = React.useState(true);
  const [dados, setDados] = React.useState()
  const [inputId, setInputId] = React.useState(1)
  
  const handleChange = (event) => {
    setInputId(Number(event.target.value));
  }


  function increment(){
    if (inputId != 1279){
      setInputId(state => state + 1);
      document.getElementById("lightEffect").classList.add("active")
      setTimeout(()=> {
        document.getElementById("lightEffect").classList.remove("active");
     },300);
    }
  }
  function decrement(){
    if (inputId > 1){
      setInputId(state => state - 1)
      document.getElementById("lightEffect").classList.add("active")
      setTimeout(()=> {
        document.getElementById("lightEffect").classList.remove("active");
     },300);
    }
  }

  async function puxaDados(){
    setCarregando(false)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputId}`);
    const data = await response.json();
    setDados(data);
    setCarregando(true)
  }

  React.useEffect(() => {
    puxaDados();
  },[inputId])


  return (
    <>
      <div className='allFrame'>
        <div className='dex'>
          <div className='lightEffect' id='lightEffect'/>
          {dados && <Pokemon dados={dados}/>}
          <div className='inputBox'>
            <div className='headerBox'>
              <button className='leftBotao' onClick={decrement}/>
              <input
                type="numeric"
                id="inputId"
                name="inputId"
                onChange={handleChange}
                value={inputId}
                autoComplete="off"
              />
              <button className='rightBotao' onClick={increment}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App