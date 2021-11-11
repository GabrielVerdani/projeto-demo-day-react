import './index.scss'

import backgroundImage from '../../assets/background.png'

export default function Index() {
  return (
    <div className="index-page">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Olá!</h1>
          <p>Seja bem vindo ao VOA, <br />a <span>Vitrine Online para Anunciantes</span>.</p>
          <p>Digite seu CEP para <br />encontrar produtos pertinho de você!</p>
        </div>

        <form action="">
          <input type="text" name="buscarCEP" id="searchCep" placeholder="Digite seu CEP" />
          <button type="submit">Procurar</button>
        </form>
      </div>
    </div >
  )
}