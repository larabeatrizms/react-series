import React from 'react';

import PlacarContainer from './PlacarContainer';

let dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/06/2019",
        horario: "19h",
    },
    casa: {
        nome: "Fortaleza",
    },
    visitante: {
        nome: "Ceará",
    }
};

export default class App extends React.Component{
    render() {
        return (
            <div>
                <PlacarContainer partida={dados.partida}
                                casa={dados.casa}
                                visitante={dados.visitante} />
            </div>
        );
    }
}