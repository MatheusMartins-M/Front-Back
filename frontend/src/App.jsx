import { useEffect, useState } from 'react'; 

function App() {
  const [produtos, setProdutos] = useState([]);
  const [message, setMessage] = useState('')
  
  useEffect(() => { fetch('http://localhost:8000/API/produtos/')
    .then(res => res.json())
    .then(data => setProdutos(data))
    .catch(() => setMessage('Erro ao carregar os dados do backend'));
  }, []);

  return (
    <div>
      <p style={{color: "red"}}>{message}</p>

      {message === "" && (
        <div>
          <h1>Listar Produtos</h1>
          <ul>
            <table className="table table-striped mt-3"> 
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Código</th>
                  <th>Nome</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map(prod => (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.cod}</td>
                    <td>{prod.nome}</td>
                    <td>R${parseFloat(prod.valor).toFixed(2)}</td>
                  </tr>
                    )
                  )
                }
              </tbody>
            </table>
          </ul>
        </div>
        )
      }
    </div>
  )
}

export default App;