import React from "react";
import "./LastSection.css";

class LastSection extends React.Component {
  render() {
    return (
        <div className="LastSection">
          <div className="parte5">
          <div className = "frontHero_titleLast">Gracias por escuchar, ahora únete.</div>
            <p className="ptextLast">
              Guarda pistas, sigue a artistas y crea tus listas. Y todo, gratis.
            </p>
            <div className="frontHero_ctaLast">
             <a href="#"><button type="button" className="bttCrearLast">
              Crea tu Cuenta
            </button></a>
            </div>
            <table className="tablebutLast">
                <tbody>
                  <tr>
                    <th><p className="cuentaLast">¿Ya tienes una cuenta?</p></th>
                    <th><a href="#"><button className="Inicia_Sesión">Inicia Sesion</button></a></th>
                  </tr>
                </tbody>
            </table>
            <div className="barra1"></div>
            <div className="barra"></div>
            <p className="ultimo">Búsquedas populares ⁃ Directorio ⁃ Quiénes somos ⁃ Recursos de creador ⁃ Blog ⁃ Trabajo ⁃ Desarrolladores ⁃ Ayuda ⁃ Legal ⁃ Privacidad ⁃ Política de cookies ⁃ SoundCloud Ltd. ⁃ Listas de éxitos</p>
          </div>
        </div>
    );
  };
};

export default LastSection;