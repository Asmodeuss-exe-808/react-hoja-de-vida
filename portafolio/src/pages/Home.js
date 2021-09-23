import{
   Link
  } from "react-router-dom";
  import '../components/contact/Contact.css';

function Home(){

    return(

        <div><center>
            <h1 className="pagprin">Página principal</h1>
           <div className="botonini">
            <button type="button"  class="btn btn-light"><Link to="/portafolio">Ir al portafolio </Link> </button>
            </div>
            </center>
        </div>

    );
}

export default Home;