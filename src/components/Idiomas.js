import React from 'react'

function Idiomas() {
    return (
        <div className="todo_idiomas">
            <div id="idiomas">
                <div className="titulo_idiomas">
                    <h3>IDIOMAS</h3>
                </div>
                <div className="mis_idiomas">
                    <div className="idioma idioma_ingles">
                        <div className="nombre_idioma ingles">
                            Inglés
                        </div>
                        <div className="nivel_idioma">
                            <div className="circulos_idiomas">
                                <div className="circulo"></div><div className="circulo"></div><div className="circulo"></div><div className="circulo"></div><div className="circulo circulo_medio"><div className="medio_izq"></div><div className="medio_der"></div></div><div className="circulo circulo_vacio"></div>
                            </div>
                            <div className="nivel">
                                B2/C1
                            </div>
                        </div>
                    </div>
                    <div className="idioma idioma_frances">
                        <div className="nombre_idioma frances">
                            Francés
                        </div>
                        <div className="nivel_idioma">
                            <div className="circulos_idiomas">
                                <div className="circulo"></div><div className="circulo"></div><div className="circulo circulo_vacio"></div><div className="circulo circulo_vacio"></div><div className="circulo circulo_vacio"></div><div className="circulo circulo_vacio"></div>
                            </div>
                            <div className="nivel nivel_corto">
                                A2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Idiomas
