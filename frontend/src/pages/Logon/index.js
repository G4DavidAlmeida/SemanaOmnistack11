import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"></img>
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" />
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