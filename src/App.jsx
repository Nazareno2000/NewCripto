import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Formulario from './Components/Formulario'
import Data from './Components/Data'
import './index.css'
function App() {

  const [busqueda, setBusqueda] = useState({
    crypto: '',
    currency: ''
  })

  const [consultar,guardarConsulta] = useState(false)
  const [resultado, setResultado] = useState({})

  const {crypto, currency} = busqueda

  useEffect(( ) => {
    const api = (`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`)
    const getCripto = async() => {

    const cripto =  await fetch(api)
    const data =  await cripto.json()    
    setResultado(data)
    guardarConsulta(false)
      
  }
  getCripto()
  }, [consultar])



  return (
     <>
    <Header
      titulo='MUNDOCRIPTO'
    />
      <div className="container-form">
        <div className="container">
            <div className="row">
                <div className="col m6 s12">
                    <Formulario 
                      busqueda={busqueda}
                      setBusqueda={setBusqueda}
                      guardarConsulta={guardarConsulta}
                 
                    />
                </div>
                <div className="col m6 s12">
                  <Data
                    resultado={resultado}
                    busqueda={busqueda}
                  />
                </div>
            </div>
        </div>
      </div>  
  </>
  )
}

export default App