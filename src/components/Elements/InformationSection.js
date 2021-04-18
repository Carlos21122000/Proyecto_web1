import React from "react";
import "./InformationSection.css";

class InformationSection extends React.Component {
  render() {
    return (
        <div className="havetochek">
          <div className="Parte4">
          <h2 className = "frontHero_titleInfo">Llamada a todos los creadores</h2>
            <p className="ptextInfo">
              "Hazte con SoundCloud para estar en contacto <br/>
              con tus seguidores, compartir tus canciones y <br/>
              aumentar tu público. ¿A qué esperas?"<br/>
            </p>
            <div className="frontHero_ctaInfo">
             <a href="https://community.soundcloud.com/"><button type="button" className="bttInfo">
              Más Información
            </button></a>
            </div>
          </div>
        </div>
    );
  };
};
export default InformationSection;