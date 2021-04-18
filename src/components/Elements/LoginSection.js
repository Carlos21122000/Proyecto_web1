  
import React from "react";
import "./LoginSection.css";
import Imagen13 from "../../../images/SoundCloudLogo.png";
class LoginSection extends React.Component  {
  render() {
    return (
        <div className="Login">
          <div className="colorLogin"></div>
          <div className="PortadaLogin">
            <div className="NavLogin">
              <table>
                <thead>
                  <tr>
                    <th><img className="logoSLogin" src={Imagen13}></img></th>
                    <th className="plogoLogin">SOUNDCLOUD</th>
                    <th><a href="#"><button type="button" className="bttIniciarSLogin">Inicia sesión</button></a></th> 
                    <th><a href="#"><button type="button" className="bttCrearTuCuentaLogin">Crea tu cuenta</button></a></th>
                    <th className="creadoresLogin">Para Creadores</th> 
                  </tr>
                </thead>
              </table>
            </div>
            <h2 className = "frontHero_title">Conectar en SoundCloud</h2>
            <p className="ptextLogin">
              "Descubre, escucha y comparte un catálogo de música <br/>
               que no deja de crecer con artistas emergentes y<br/>
               consolidados de todo el mundo."<br/>
            </p>
            <div className="frontHero_cta">
             <a href="#"><button type="button" className="bttRegistrarseLogin">
              Registrarse gratis
            </button></a>
            </div>
          </div>
        </div>
    );
  };
};
export default LoginSection;
