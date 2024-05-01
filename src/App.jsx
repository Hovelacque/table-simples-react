import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'

function App() {
  const [lista, setLista] = useState([])

  function addList(nome, sobrenome, idade) {
    setLista([...lista, {
      nome, idade, sobrenome
    }]);
  }

  return (
    <>
      <div className="card">
        <Form add={addList} />
        {
          lista.length == 0 ?
            <label>Nenhum item cadastrado!</label>
            :
            <Table lista={lista} />
        }
      </div>
    </>
  )
}

export default App
