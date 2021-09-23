import Error from '../components/contact/Error.png';
import '../components/contact/Contact.css';
import{
    Link
   } from "react-router-dom";
 
function Error404(){
    return(

        <><div>
<button type="button" class="btn btn-light"><Link to="/home">Ir a la página de inicio</Link></button>
</div><div>
<button type="button" class="btn btn-light"><Link to="/portafolio">Ir a la hoja de vida   </Link> </button>
      
        </div><center>
                <div className="error">
                    <img src={Error} />
                </div>
            </center></>

            
    );
}
export default Error404