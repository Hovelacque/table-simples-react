import { useState } from "react"
import FormField from "./FormField"

export default ({ add }) => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [idade, setIdade] = useState(0);

    return (
        <div style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <FormField label='Nome' value={nome} change={setNome} />
            <FormField label='Sobrenome' value={sobrenome} change={setSobrenome} />
            <FormField label='Idade' value={idade} change={setIdade} />
            <button onClick={() => {
                add(nome, sobrenome, idade)
                setNome('')
                setSobrenome('')
                setIdade(0)
            }}>
                Adicionar
            </button>
        </div>
    )
}