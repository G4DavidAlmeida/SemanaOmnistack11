import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

export default function NewIncident () {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    function handleNewIncident (event) {
        event.preventDefault();
        const ongId = localStorage.getItem('ongId')
        api.post('/incidents', 
            {title, description, value},
            { headers: { Authorization: ongId } }
        )
        .then(() => history.push('/profile'))
        .catch(() => alert('Erro ao criar novo registro'))
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Decreva o caso detalhadamente para encontrar
                        um herói para resolver isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                        placeholder="Título do caso"
                    />

                    <textarea
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        placeholder="Descrição"
                    ></textarea>

                    <input
                        value={value}
                        onChange={event => setValue(event.target.value)}
                        placeholder="Valor em reais"
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}