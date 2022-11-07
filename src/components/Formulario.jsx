import React from 'react'
import { useRef } from 'react'
const Formulario = ({ busqueda, setBusqueda, guardarConsulta}) => {
  const cryptoName = useRef()
  const cryptoFiat = useRef()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const objeto = {
      crypto: cryptoName.current.value,
      currency: cryptoFiat.current.value
    }
   
    setBusqueda(objeto)
    guardarConsulta(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-field col s12'>
        <select 
          className='select browser-default'
          name="crypto"
          id="crypto"
          ref={cryptoName}
        >
          <option value="disabled selected">--Seleccione una moneda--</option>
          <option value="BTC">Bitcoin</option>
          <option value="LNR">Lunar</option>
          <option value="ETH">Ethereum</option>
          <option value="USDT">Tether USDT</option>
          <option value="XRP">XRP</option>
          <option value="BNB">Binance Coin</option>
          <option value="USDC">USD Coin</option>
          <option value="BUSD">BUSD</option>
          <option value="SOL">Solana</option>
          <option value="ADA">Cardano</option>
          <option value="DOGE">Dogecoin</option>
          <option value="DOT">Polkadot</option>
          <option value="LINK">Chainlink</option>
          <option value="AVAX">Avalanche</option>
          <option value="UNI">Uniswap Protocol Token</option>
          <option value="QNT">Quant</option>
          <option value="STETH">Staked Ether</option>
          <option value="APT">Aptos</option>
          <option value="MATIC">Matic</option>
          <option value="FTT">FTT Token</option>
          <option value="RUNE">Thoirchaine</option>
        </select>

        <div className="input-field col s12">
          <select
            className="select browser-default"
            name="currency"
            id="currency"
            ref={cryptoFiat}

            
          >
            <option value="disabled selected">--Seleccione una Divisa--</option>
            <option value="ARS">ARS</option>
            <option value="USD">USD</option>
          </select>
          <label htmlFor="currency"></label>
        </div>
        <div className="input-field col s12">
        <input  
          type="submit"
          value="Buscar Valor"
          className="but waves-effect btn-large btn-block  accent-4"
        />
      </div>

      </div>
    </form>
  )
}

export default Formulario
