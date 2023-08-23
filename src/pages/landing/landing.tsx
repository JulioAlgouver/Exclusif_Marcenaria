import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup'

import './landing.css';
import Menu from "../../components/menu/menu";

import mainBanner from "../../images/main_banner.png";
import barracao from "../../images/barracao.png";
import exclusifWatermark from '../../images/exclusif_watermark.png';
import lineSobre from '../../images/line_sobre.png';
import missao from '../../images/missao.png';
import visao from '../../images/visao.png';
import labelValores from '../../images/label_valores.png';
import iconIntegridade from '../../images/icon_integridade.png';
import iconComprometimento from '../../images/icon_comprometimento.png';
import iconQualidade from '../../images/icon_qualidade.png';
import iconSolidariedade from '../../images/icon_solidariedade.png';
import gradient from '../../images/gradient.png';
import Rodape from "../../components/rodape/rodape";
import Politica from "../../components/politica/politica";

const Landing : React.FC = () => {

    const[message, setMessage] = useState('');

    function sendMail(event:any){
        event.preventDefault();

        if(message === ''){
            alert("Não foi possível enviar o formulário, primeiro digite seu WhatsApp.")
            return;
        }

        const templateParams = {
            message: message
        }

        emailjs.send("service_5id7zjj","template_l9kkxj8",templateParams,"KashALLgIXujhn0UB")
        .then((response) => {
            console.log("EMAIL ENVIADO",response.status, response.text)
            setMessage('');
        }, (error) => {
            console.log("ERRO: ", error)
        })

    }

    return(
        <div className="container">
            <div className="menu">
                <Menu/>
            </div>
            <div className="content">
                <div className="orcamento" id='orcamento'>
                    <img src={mainBanner}/>
                    <div className="formulario_orcamento">
                        <strong>A hora de realizar o sonho<br/>
                                    dos seus móveis<br/>
                                        é agora!<br/>
                        </strong>
                        <br/>

                        <form className="form" onSubmit={sendMail}>
                            <input className="input"
                                   type="text"
                                   placeholder="Digite aqui o seu WhatsApp"
                                   onChange={(event) => setMessage(event.target.value)}
                                   value={message}
                            />
                            
                            <button type="submit" name="submit" value="submit">Solicitar Contato</button>
                        </form>

                    </div>
                </div>
                <div className="sobre">
                    <img src={barracao} className="imageBarracao"/>
                    <div className="quem_somos">
                        <img src={exclusifWatermark}/>
                        <br/>
                        <div className="title" id='sobre'>
                            <span>QUEM <strong>SOMOS</strong></span>
                        </div>
                        <div className="description">
                            <span>
                                Foi com essa missão que em Outubro de 1989 a
                                Exclusif Marcenaria e Design foi fundada. Confiança,
                                qualidade e um rigoroso cumprimento nos prazos de
                                entrega, alinhados aos menores preços do mercado
                                foram os responsáveis pelo sucesso e a completa
                                sintonia com seus clientes.<br/>
                                <p/>
                                Atuando no segmento residencial e comercial, a
                                marcenaria projeta e executa móveis sob medida para
                                todos os tipos de ambientes, com os melhores
                                materiais e acessórios existentes no mercado. Com isso
                                a Exclusif Marcenaria e Design tem a certeza de ser à
                                medida do seu móvel.<br/>
                                <p/>
                                Estamos aqui para ajudar você a dar um novo conceito
                                para seu ambiente.
                            </span>
                        </div>
                    </div>
                    <div className="lineSobre">
                        <img src={lineSobre}/>
                    </div>

                    <div className="missao">
                        <img src={missao}/>
                        <span>
                            Projetar e executar móveis sob medida<br/>
                            para todos os tipos de ambientes, utilizando os<br/>
                            melhores materiais e acessórios existentes no mercado.<br/>
                            Atuando no segmento residencial e comercial, a Exclusif<br/>
                            Móveis prioriza a confiança, a qualidade e o rigoroso<br/>
                            cumprimentos nos prazos de entrega, visando a satisfação<br/>
                            do cliente e a melhoria da qualidade de vida.<br/>
                        </span>
                    </div>

                    <div className="visao">
                        <img src={visao}/>
                        <span>
                            Ser uma empresa reconhecida pela qualidade de<br/>
                            nossos produtos e serviços, com notoriedade no<br/>
                            mercado moveleiro, comprometida com a<br/>
                            satisfação de nossos clientes<br/>
                            e colaboradores.<br/>
                        </span>
                    </div>

                    <div className="valores">
                        <div className="title">
                            <img src={labelValores}/>
                        </div>
                        <div className="content">
                            <div className="integridade">
                                <img src={iconIntegridade}/>
                                <strong>Integridade</strong>
                            </div>

                            <div className="solidariedade">
                                <img src={iconSolidariedade}/>
                                <strong>Solidariedade</strong>
                            </div>

                            <div className="comprometimento">
                                <img src={iconComprometimento}/>
                                <strong>Comprometimento</strong>
                            </div>

                            <div className="qualidade">
                                <img src={iconQualidade}/>
                                <strong>Consciência<br/>de Qualidade</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projetos">
                    <div className="titulo">
                        <img src={gradient}/>
                        <strong id='projetos'>Veja alguns de nossos projetos</strong>
                    </div>
                    <div className="fotos">
                        <div className="galeria1"/>
                        <div className="galeria2"/>
                        <div className="galeria3"/>
                        <div className="galeria4"/>
                    </div>
                    <div className="politica">
                        <span>
                            A Exclusif Marcenaria e Design preza pela transparência, 
                            desde o projeto até a entrega do seu móvel.<br/>
                            Para garantir a sua satisfação, nós seguimos uma política
                            de qualidade rígida.<br/><br/>
                            Clique <Popup trigger={<button style={{border:'none', background:'none', cursor:'pointer'}}><u>aqui</u></button>} position={"right top"}>
                                        <Politica/>
                                   </Popup> e saiba mais sobre nossas condições de entrega,
                            pagamento, alterações em seu projeto e cancelamentos.
                        </span>
                    </div>
                </div>
            </div>
            <div className="footer" id='rodape'>
                <Rodape/>
            </div>
        </div>
    )
}

export default Landing;