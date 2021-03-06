import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

export default function Register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState();

    const history = useHistory();

    function handleRegister (event) {
        event.preventDefault();

        api.post('/ongs', {name, email, whatsapp, city, uf})
            .then(response => {
                alert(`Seu id de acesso: ${response.data.id}`);
                history.push('/');
            })
            .catch(() => alert('Erro ao criar registro'));
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas
                        a encontrarem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiLogIn size={16} color="#e02041" />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder="Nome da ONG"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="E-mail"
                    />
                    <input 
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                        placeholder="Whatsapp"
                    />

                    <div className="input-group">
                        <input
                            value={city}
                            onChange={event => setCity(event.target.value)}
                            placeholder="Cidade"
                        />
                        <input
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                            placeholder="UF"
                            style={{ width: 80 }}
                        />
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}