import React from "react";
import "./SongSection.css";

class SongSection extends React.Component {
  render() {
    return (
        <div className="SongSection">
          <div className="parte2">
          <div className="tituloSong">Escucha la música del momento gratis en la comunidad SoundCloud</div>
            <table className="table1">
                <tbody>
                  <tr>
                    <th className="portadaSong"><img src="../../../images/song1.jpg"></img><h4>LMV-You Say You Love Me (Prod.EFE1 X Malloy)</h4><h5>LMV</h5></th>
                    <th className="portadaSong"><img src="../../../images/song2.jpg"></img><h4>Dakiti ft. Jhay Cortez</h4><h5>Bad Bunny</h5></th>
                    <th className="portadaSong"><img src="../../../images/song3.jpg"></img><h4>Rauw Alejandro - Reloj (ft. Anuel AA)</h4><h5>Music Live</h5></th>
                    <th className="portadaSong"><img src="../../../images/song4.jpg"></img><h4>BANDIDO - MYKE TOWERS FT JUHN</h4><h5>TRAP x REGGAETON</h5></th>
                    <th className="portadaSong"><img src="../../../images/song5.jpg"></img><h4>CABRON Y VAGO - EL FANTASMA Y LOS DOS CARNALES.mp3</h4><h5>Manuel Garcia Espinosa 1</h5></th>
                    <th className="portadaSong"><img src="../../../images/song7.jpg"></img><h4>Wisin, Jhay Cortez - Fiel</h4><h5>The Real Music</h5></th>
                  </tr>
                </tbody>
            </table>
            <table className="table1">
                <tbody>
                  <tr>
                    <th className="portadaSong"><img src="../../../images/song6.jpg"></img><h4>Kevin Roldan Ft Bryant Myers y Lyanno - Hasta Abajo</h4><h5>Reggae Trap</h5></th>
                    <th className="portadaSong"><img src="../../../images/song8.jpg"></img><h4>COMO SI NADA - ADSO ALEJANDRO</h4><h5>Franco Dgk Escate Quispe</h5></th>
                    <th className="portadaSong"><img src="../../../images/song9.jpg"></img><h4>Jay Wheeler, DJ Nelson y Myke Towers - La Curiosidad</h4><h5>Jay Wheeler</h5></th>
                    <th className="portadaSong"><img src="../../../images/song12.jpg"></img><h4>Christian Nodal - Botella Tras Botella Ft. Gera MX - (LETRA_LYRICS) 2020(MP3_160K)_1.mp3</h4><h5>Joshua Mitchell</h5></th>
                    <th className="portadaSong"><img src="../../../images/song11.jpg"></img><h4>Ozuna, J Balvin, Chencho Corleone - Una Locura</h4><h5>Ozuna</h5></th>
                    <th className="portadaSong"><img src="../../../images/song10.jpg"></img><h4>DENVIX MUSIC CÓMO SE SIENTE REMIX - BAD BUNNY Y JHAY CORTEZ DENVIX RMX</h4><h5>DENVIX MUSIC</h5></th>
                  </tr>
                </tbody>
            </table>
            <div className="frontHero_cta">
             <a href="https://soundcloud.com/discover"><button type="button" className="bttListasSong">
              Explora las listas de moda
            </button></a>
            </div>
          </div>
        </div>
    );
  };
};
export default  SongSection;