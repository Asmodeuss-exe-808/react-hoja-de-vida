import './Contact.css';
import React from 'react';
import {
    Modal,Button
} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ESTUDIOS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <ul>
 <li><h4 className="textno">Colegio Pedagógico Dulce María</h4><h5 className="textnon">2009-2020</h5>En el Colegio Pedagógico Dulce María comprele la primaria y el bachillerato, con multiples medallas de honor tanto educativas como deportivas.</li>
 <li><h4 className="textno">SENA</h4><h5 className="textnon">2019-Actualidad</h5>En el SENA (Servicio Nacional de Aprendizaje) en Colombia, culminé con el técnico en programación de software (2019-2020), para posteriormente terminar con el tecnólogo en ADSI (Análisis y Desarrollo de Sistemas de Información) el cual comenzo en el año 2020 y sigue en proceso con esperanza de su culminación en el año 2022.</li>
 
</ul>
           </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>volver</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  function  Contact(){
    const [modalShow, setModalShow] = React.useState(false);


    return(

        <><div className="contageneral">
            <div className="contauno">
            <div className="contactounodentro">
                
            <center>  <h5 className="tex">CONTACTO</h5></center> 
               <div className="info"><i class="fas fa-phone-alt"></i>+57 3054109691 </div>
                <div className="info"><i className="fas fa-envelope"></i>giovalfann10@gmail.com </div>
                <div className="info"><i class="fas fa-street-view"></i>calle129#124-36 </div>
<center>
<hr className="lineauno"></hr>
</center>
        <center>  <h5 className="tex">HABILIDADES</h5></center>    
              <div className="skills">      
          
                
              <div className="info">Eficiencia</div>   <progress  max="100" value="85"></progress>
              <div className="info">Responsabilidad</div>   <progress max="100" value="80"></progress>
              <div className="info">Innovación</div>   <progress max="100" value="70"></progress>
              <div className="info">Creatividad</div>   <progress max="100" value="90"></progress>
        <h1><h1></h1></h1>
         </div>   
            <center>
<hr className="lineauno"></hr>
</center>
<center>
<h5 className="tex">IDIOMAS</h5>
</center>
            <div className="lenguajes">

                
                
              <div className="info">Español</div>   <progress max="100" value="90"></progress>
              <div className="info">Ingles</div>   <progress max="100" value="75"></progress>
              <div className="info">Italiano</div>   <progress max="100" value="50"></progress>
             
            </div>   



               
            </div>

            </div>


            <div className="contados">

            <div className="information"><h5 className="text"><i class="fas fa-user-alt"></i>PERFIL</h5><div className="text"><i>
            Personalmente considero que tengo un fácil manejo de HTML y CSS, con conocimientos en constante progreso de Laravel, con framewoks como jetstream para el manejo de sesiones, y con un gran manejo en diseño, además de conocimientos reforzados en SQL para las bases de datos, considero que cumplo una buena labor tanto individualmente como en equipo, siendo este último destacable por mis instintos como líder, cuento con un manejo alto del inglés en su mayoría del escuche, siendo el habla una un compromiso a mejorar.
                </i>  </div>
                <h5 className="text"><i class="fas fa-user-graduate"></i>ESTUDIOS</h5><div className="text"><i>
         En cuanto a estudios se refiere, soy partidario de completar cada uno de ellos con la mayor disposición, generando que siempre quiera aprender algo nuevo.


                </i>  </div><center>
                <Button variant="primary" onClick={() => setModalShow(true)}>
        Más información 
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                </center>
</div>
            













            </div>
            


            
            </div>
            
</>
    )
}

export default Contact;