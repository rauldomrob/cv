import React, { useState, useEffect } from 'react';
import yo from '../resources/yo.webp';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [scrollY, setScrollY] = useState(0);  // Almacenar la posición Y del scroll


    const toggleVisibility = (event) => {
        setIsVisible(!isVisible);

        event.preventDefault();

        let anchorName = event.target.getAttribute("href");
        if (anchorName) {
            anchorName = anchorName.slice(1);
            const anchorElement = document.getElementById(anchorName);

            if (anchorElement) {
                const offsetTop = anchorElement.offsetTop - 100; // Ajustar para que el elemento quede más abajo de la parte superior
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Efecto para actualizar el tamaño de la ventana
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Escucha cambios en el tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpieza del evento
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav>
            {(windowWidth > 1020 || isVisible) && (
                <div className='tapar' onClick={toggleVisibility}></div>
            )}
            <div className="contendor">
                <div className="sobre_mi">
                    <div className="mi_foto">
                        <img src={yo} alt="Raúl"></img>
                    </div>
                    <div className="contendor_nombre_web">
                        <div className="nombre">
                            Raúl Domínguez Robles
                        </div>
                        <div className="web">
                            <a href='mailto:rauldr717@gmail.com' target='blank'>
                                rauldr717@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                {/* Siempre mostrar el div si el ancho de la pantalla es mayor a 1020px, o si isVisible es true y el ancho es menor a 1020px */}
                {(windowWidth > 1020 || isVisible) && (
                    <div className={`apartados`} style={{ display: 'flex' }}>
                        <div>
                            <a href="#portada" onClick={toggleVisibility}>Inicio</a>
                        </div>
                        <div>
                            <a href="#proyectos" onClick={toggleVisibility}>Proyectos</a>
                        </div>
                        <div>
                            <a href="#sobre_mi" onClick={toggleVisibility}>Sobre mi</a>
                        </div>
                        <div>
                            <a href="#certificaciones" onClick={toggleVisibility}>Certificaciones</a>
                        </div>
                        <div>
                            <a href="#skills" onClick={toggleVisibility}>Skills</a>
                        </div>
                    </div>
                )}
                {/* Mostrar SVG solo si el ancho de la pantalla es menor a 1020px */}
                {windowWidth < 1020 && (
                    <div className='hamburguesa'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={toggleVisibility}><script xmlns="" />
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                            <script xmlns="" />
                        </svg>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header
