import './Header.css';
import foto from './foto.jpg';

function Header(){
    return(
        <><div className="general">
            <div className="uno">
            <div className="foto">
                <img src={foto} alt="foto Giovanny Chaparro" />
            </div>

        </div>
        <div className="dos">
            <header>
                
            </header>
            
            <div className="texto">
            <h2 className="nomprincipal">GIOVANNY CHAPARRO CASTRO</h2>
            <h3 className="nombre">PROGRAMADOR</h3>
            </div>
        </div></div></>

    )
}

export default Header;