import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Inter-Milan-logo.png';
import './styles.css';

function TelaInicial() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-inicio'>
            <div className='container'>
                <img src={logo} alt="Logo da empresa" />
                <h2>Sistema de Gestão</h2>
            <p className="welcome-message">Bem-vindo à nossa plataforma!</p>


                <button onClick={() => navigate('/cadastro')} className='link-voltar'>
                    Cadastrar jogadores
                </button>

                <button onClick={() => navigate('/jogadores')} className='link-voltar'>
                    Jogadores cadastrados
                </button>


            </div>
        </div>
    )
    
}
export default TelaInicial;