import React from 'react';


import './styles.css';

export default function Ambiente() {
    return (
        <div className="ambiente">
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Nome do Ambiente</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">CNPJ</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="center-align">
                    <button id="button-subimit" type="submit" className="btn btn-primary">REGISTRAR !</button>
                </div>
            </form>
        </div>
    )
}