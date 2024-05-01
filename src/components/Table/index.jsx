import './index.css';

export default ({ lista }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((item, index) => (
                        <tr key={index.toString()}>
                            <td>{item.nome}</td>
                            <td>{item.sobrenome}</td>
                            <td>{item.idade}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}