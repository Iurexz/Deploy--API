// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDeUsuarios'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaUsuarios() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-jogadores'>
            <div className='container'>
                <h2>Lista de jogadores</h2>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/cadastro')} className='link-voltar'>
                    Cadastrar Jogadores
                </button>

                <button onClick={() => navigate('/')} className='link-voltar'>
                    Voltar para o início
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios