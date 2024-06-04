import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import wanted from '../resources/wanted.png';
import petpalace from '../resources/petpalace.png';
import devcode from '../resources/devcode.png';
import gestor from '../resources/gestor.png';
library.add(faGithub);

function Proyectos() {
    return (
        <div className='todo_proyectos'>
            <div id='proyectos'>
                <div className="titulo_proyectos">
                    <h3>PROYECTOS</h3>
                </div>
                <div className='proyectos'>
                    <div className='proyecto'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>Wanted</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
                                Wanted es una aplicación web conectada con la base de datos del FBI para explorar información sobre los fugitivos más buscados y casos no resueltos.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
                                Con Wanted podrás acceder a toda la información de dichos fugitivos y casos sin resolver aplicando algunos filtros.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://wanted-raul-dominguez-robles.pages.dev" target="blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 28 28" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><script xmlns="" />
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                        <path d="M11 13l9 -9" />
                                        <path d="M15 4h5v5" />
                                        <script xmlns="" />
                                    </svg>
                                    Visitar
                                </a>
                                <a href="https://github.com/rauldomrob/Wanted_FBI_API" target="blank" className='boton_margen'>
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon="fab fa-github" />
                                    </div>
                                    Código
                                </a>
                            </div>
                            <div className='tecnologias'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://wanted-raul-dominguez-robles.pages.dev" target="blank">
                                    <img src={wanted} alt="Raúl"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='separador_proyectos'></div>
                    <div className='proyecto proyecto_reves'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>PetPalace</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
                                PetPalace es una plataforma web de adopción de animales, donde podrás explorar diversas mascotas en busca de un hogar.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
                                Una vez registrado, podrás ver el perfil de cada animal y aplicar filtros para buscar según tus preferencias. Cada perfil incluye un teléfono de contacto para facilitar la adopción.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://petpalace-raul-dominguez-robles.pages.dev" target="blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 28 28" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><script xmlns="" />
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                                        <path d="M11 13l9 -9" />
                                        <path d="M15 4h5v5" />
                                        <script xmlns="" />
                                    </svg>
                                    Visitar
                                </a>
                                <a href="https://github.com/rauldomrob/PetPalace" target="blank" className='boton_margen'>
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon="fab fa-github" />
                                    </div>
                                    Código
                                </a>
                            </div>
                            <div className='tecnologias'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>Firebase</p>
                                <p>Cordova</p>
                                <p>Node.js</p>
                            </div>
                            <div className='tecnologias_pequeño'>
                                <div className='tecnologias1'>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                </div>
                                <div className='tecnologias2'>
                                    <p>Firebase</p>
                                    <p>Cordova</p>
                                    <p>Node.js</p>
                                </div>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://petpalace-raul-dominguez-robles.pages.dev" target="blank">
                                    <img src={petpalace} alt="Raúl"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='separador_proyectos'></div>
                    <div className='proyecto'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>DevCode</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
                                DevCode es un foro dedicado a programadores, diseñado para impulsar la interacción y el intercambio de conocimientos.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
                                En DevCode, los usuarios pueden publicar sus experiencias, resolver dudas y colaborar activamente en diversos temas relacionados con la programación.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://github.com/rauldomrob/DevCode" target="blank">
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon="fab fa-github" />
                                    </div>
                                    Código
                                </a>
                            </div>
                            <div className='tecnologias'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>PHP</p>
                                <p>MySQL</p>
                            </div>
                            <div className='tecnologias_pequeño'>
                                <div className='tecnologias1'>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                </div>
                                <div className='tecnologias2'>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                </div>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://github.com/rauldomrob/DevCode" target="blank">
                                    <img src={devcode} alt="Raúl"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='separador_proyectos'></div>
                    <div className='proyecto proyecto_reves'>
                        <div className='todo_descripcion'>
                            <div className='titulo_proyecto'>
                                <h2>Gestor Universidad</h2>
                            </div>
                            <div className='parrafo_proyecto parrafo1'>
                                Este gestor de la Universidad de los Scrum Masters permite la administración de alumnos, profesores, cursos y departamentos.
                            </div>
                            <div className='parrafo_proyecto parrafo2'>
                                Con este gestor, es posible manejar inscripciones, asignaciones de cursos y la estructura de los departamentos y cursos, optimizando el funcionamiento diario de la universidad.
                            </div>
                            <div className='botones_proyecto'>
                                <a href="https://github.com/rauldomrob/gestor_universidad" target="blank">
                                    <div className='logo_github_botones_proyecto'>
                                        <FontAwesomeIcon icon="fab fa-github" />
                                    </div>
                                    Código
                                </a>
                            </div>
                            <div className='tecnologias1'>
                                <p>Java</p>
                            </div>
                        </div>
                        <div className='todo_img_proyecto'>
                            <div className='img_proyecto'>
                                <a href="https://github.com/rauldomrob/gestor_universidad" target="blank">
                                    <img src={gestor} alt="Raúl"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
