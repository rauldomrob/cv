import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faLinkedin, faGithub, faEnvelope);



function Footer() {
    const numeroTel = '+34608825094';

    const llamar = (event) => {
        event.preventDefault();
        window.location.href = `tel:${numeroTel}`;
    };
    return (
        <div className='footer'>
            <div className='todo_contacto'>
                <div className='contacto'>
                    <a href='mailto:rauldr717@gmail.com'>
                        <div className='contactame'>
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            Contacto
                        </div>
                    </a>
                    <div className='developed'>
                        Developed by Raúl Domínguez Robles
                    </div>
                </div>
                <div className='redes'>
                    <div onClick={llamar}>
                        <div className='logo_tel'>
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                    </div>
                    <a href='https://github.com/rauldomrob' target='blank'>
                        <div className='logo_github'>
                            <FontAwesomeIcon icon="fab fa-github" />
                        </div>
                    </a>
                    <a href='mailto:rauldr717@gmail.com' target='blank'>
                        <div className='logo_correo'>
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
