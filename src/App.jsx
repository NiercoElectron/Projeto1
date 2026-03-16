import { use, useEffect, useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado"

function App() {
  // Hooks - useState - Manipula o estado da variável
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Calcular o IMC
  
  const calcularIMC = () => {
    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      setResultado(imc)
    } else {
      alert("Por favor, insira um peso e altura válidos.");
    }
  }

  // Efeito colateral para mostrar o resultado
  useEffect(() => {
    // Verificar se o resultado é maior que 0 para mostrar o resultado. Usando operador ternário para definir o estado de mostrarResultado
    resultado > 0 ? setMostrarResultado(true) : setMostrarResultado(false);
    // O efeito só executa quando a variável resultado for alterada, por isso é necessário colocar resultado no array de dependências do useEffect
  }, [resultado])

  return (
    <section className="container">
      <div className='box'>
      <Header/>
      <form action="">
        <div>
          <label htmlFor="altura">Altura<span>(ex: 1.80)</span></label>
          <input 
          type="number" 
          id="altura" 
          step="0.01" // Permite o uso de pontos decimais
          placeholder="Digite sua altura" 
          onChange={({target}) => setAltura(parseFloat(target.value))}/>

        </div>
        <div>
          <label htmlFor="peso">Peso<span>(ex: 70)</span></label>
          <input 
          type="number" 
          id="peso" 
          step="0.01" // Permite o uso de pontos decimais
          placeholder="Digite seu peso" 
          onChange={({target}) => setPeso(parseFloat(target.value))}/>

        </div>
        <button type="button" onClick={calcularIMC}>Calcular IMC</button>
      </form>
      </div>
      <Header/>
      <Resultado/>
      {mostrarResultado && <Resultado resultado={resultado.toFixed(2)}/>}
    </section>
  )
}

export default App