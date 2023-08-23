import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../../scripts/useOutsideClick';
import './menudropdown.css';



function MenuDropdown(){

    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive);

    return(
        <div className="container_menu_dropdown">
            <div className="content_menu_dropdown">
                <div className="menu-Button">
                    <button onClick={onClick}/>
                </div>

                <nav 
                    ref={dropDownRef}
                    className={`menu-dropswitch ${isActive ? "active" : "inactive"}`}
                >
                    <button onClick={onClick} className='button-close-menu'/>

                    <ul>
                        <li>
                            <a href="#sobre">
                                <button onClick={onClick}>
                                    <span>SOBRE NÓS</span>
                                </button>
                            </a>
                        </li>

                        <li>
                            <a href="#orcamento">
                                <button onClick={onClick}>
                                    <span>ORÇAMENTO</span>
                                </button>
                            </a>
                        </li>

                        <li>
                            <a href="#projetos">
                                <button onClick={onClick}>
                                    <span>PROJETOS</span>
                                </button>
                            </a>
                        </li>

                        <li>
                            <a href="#rodape">
                                <button onClick={onClick}>
                                    <span>CONTATO</span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuDropdown;