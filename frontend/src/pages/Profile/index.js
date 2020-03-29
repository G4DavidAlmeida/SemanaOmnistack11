import React, { useEffect, useState } from "react";

import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from "../../services/api";

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile () {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    function handleDeleteIncidents (id) {
        api.delete(`/incidents/${id}`, { headers: { Authorization: ongId } })
            .then(() => {
                alert('registro deletado com sucesso');
                setIncidents(incidents.filter(incidents => incidents.id !== id))
            })
            .catch(() => alert('erro ao deletar registro'))
    }

    function handleLogout () {
        localStorage.clear();
        history.push('/');
    }

    useEffect(() => {
        api.get('/profile', { headers: { Authorization: ongId } })
            .then(response => setIncidents(response.data))
    }, [ongId]);

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo Usuário
                </Link>
                <button onClick={handleLogout}>
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO: </strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR: </strong>
                        <p>
                            {Intl.NumberFormat(
                                'pt-BR',
                                { style: 'currency', currency: 'BRL' },
                            ).format(incident.value)}
                        </p>
                        <button onClick={() => handleDeleteIncidents(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
/* 

                            {Intl.NumberFormat(
                                'pt-BR',
                                { style: 'Currency' },
                                'BRL'
                            ).format(incident.value)}

*/