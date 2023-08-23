import React from "react";

import './rodape.css';

import exclusifLogo from '../../images/footer_logo.png';
import iconphone from '../../images/icon_phone.png';
import iconinstagram from '../../images/icon_instagram.png';
import iconfacebook from '../../images/icon_facebook.png';


const Rodape : React.FC = () => {
    return(
        <div className="content_footer">
            <div className="logo">
                <img src={exclusifLogo}/>
            </div>
            <div className="endereco">
                <strong>Rua Dr. Valério Sobania, 450<br/>
                <span>
                    Capela Velha - Araucária/PR<br/>
                    CEP: 83707-125<br/>
                </span>    
                </strong>
            </div>
            <div className="telefone">
                <img src={iconphone}/>
                <span>(41) 3643-3152</span>
            </div>
            <div className="redesSociais">
                <strong>REDES SOCIAIS</strong>
                <div className="instagram">
                    <a href="https://www.instagram.com/exclusifmarcenaria"><img src={iconinstagram}/></a>
                    <span>@exclusifmarcenaria</span>
                </div>

                <div className="facebook">
                    <a href="https://www.facebook.com/exclusifmarcenaria"><img src={iconfacebook}/></a>
                    <span>facebook.com/exclusifmarcenaria</span>
                </div>
            </div>
            <div className="mapa">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.8575647028933!2d-49.37222312518384!3d-25.543121037376117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dd029f385bb35b%3A0x3e1b2a591b1452ff!2sR.%20Dr.%20Val%C3%A9rio%20Sobania%2C%20450%20-%20Thomaz%20Coelho%2C%20Arauc%C3%A1ria%20-%20PR%2C%2083707-125!5e0!3m2!1spt-BR!2sbr!4v1692576071234!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Rodape;