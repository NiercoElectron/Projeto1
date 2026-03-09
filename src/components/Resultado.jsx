import React from 'react'

// Desestruturação Do resultado para pegar o valor
const Tabela = ({resultado}) => {
    const valor = parseFloat(resultado);

    console.log(valor);

    if (resultado <18.5){
        return (
        <>
        <td>Abaixo do peso</td>
        <td>Abaixo de 18.5</td>
        </>
        )
    } else if (resultado >= 18.5 && resultado <25){
        return (
            <>
            <td>Peso normal</td>
            <td>18.5 - 24.9</td>
            </>
        )
    } else if (resultado >= 25 && resultado <30){
        return (
            <>
            <td>Sobrepeso</td>
            <td>25 - 29.9</td>
            </>
        )
    } else {
        return (
            <>
            <td>Obesidade Grau-I</td>
            <td>Maior ou igual a 40</td>
            </>
        )
    }
}

const Resultado = ({resultado}) => {

  return (
    <div>
        <div className='resultado'>
            <h2>Seu imc é de: <span className='img-span'>{resultado}</span></h2>
        </div>
        <table className='tabela'>
            <thead className='tabelaHeader'>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody className='tabelaBody'>
                <tr>
                    {/* Chamando a tabela resultado */}
                    <Tabela resultado={resultado}/>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Resultado