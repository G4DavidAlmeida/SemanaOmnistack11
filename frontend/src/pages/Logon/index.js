import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

export default function Logon () {
    const [id, setId] = useState();
    const history = useHistory();

    function handleLogin (event) {
        event.preventDefault();

        api.post('/sessions', { id })
            .then(response => {
                localStorage.setItem('ongId',id);
                localStorage.setItem('ongName',response.data.name);
                history.push('/profile')
            })
            .catch(() => alert('Falha no login, tente novamente'))
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        value={id}
                        onChange={event => setId(event.target.value)}
                        placeholder="Sua ID"
                    />
                    <button className="button" type="submi">
                        Entrar
                    </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroes} alt ="Heroes"></img>
        </div>
    )
}