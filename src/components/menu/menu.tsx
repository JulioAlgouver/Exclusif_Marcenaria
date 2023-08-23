import React from "react";

import './menu.css';

import logo_exclusif from '../../images/logo_exclusif.png';
import line_menu from '../../images/line_menu.png';
import MenuDropdown from "../menuDropdown/menudropdown";

const Menu : React.FC = () => {
    return(
        <div className="menu_container">
            <div className="logo">
                <img src={logo_exclusif}/>
            </div>
            <div className="menu_content">
                <div className="list_menu">
                    <ul>
                        <a href='#sobre'><li>SOBRE NÓS</li></a>
                        <a href='#orcamento'><li>ORÇAMENTOS</li></a>
                        <a href='#projetos'><li>PROJETOS</li></a>
                        <a href='#rodape'><li>CONTATO</li></a>
                    </ul>
                    <br/>
                    <img src={line_menu}/>
                </div>
            </div>

            <div className="mobile_menu">
                <MenuDropdown/>
            </div>

        </div>
    )
}

export default Menu;