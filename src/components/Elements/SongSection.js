import React from "react";
import "./SongSection.scss";
import Imagen1 from "../../../images/song1.jpg";
import Imagen2 from "../../../images/song2.jpg";
import Imagen3 from "../../../images/song3.jpg";
import Imagen4 from "../../../images/song4.jpg";
import Imagen5 from "../../../images/song5.jpg";
import Imagen6 from "../../../images/song6.jpg";
import Imagen7 from "../../../images/song7.jpg";
import Imagen8 from "../../../images/song8.jpg";
import Imagen9 from "../../../images/song9.jpg";
import Imagen10 from "../../../images/song10.jpg";
import Imagen11 from "../../../images/song11.jpg";
import Imagen12 from "../../../images/song12.jpg";



class SongSection extends React.Component {
  render() {
    return (
        <div className="SongSection">
          <div className="parte2">
            <div className="secion2Song" >
            <input className="inputSong"  type="text" placeholder="Buscar artistas, grupos, pistas y podcast"></input>
            <button class="busqueda" type="submit">'</button>  o    
            <button class="Sube_la_tuya" type="submit">Sube la tuya</button>
            </div>
          <div className="tituloSong">Escucha la música del momento gratis en la comunidad SoundCloud</div>
            <table className="table1">
                <tbody>
                  <tr>
                    <th className="portadaSong"><img src={Imagen1}></img><h4>LMV-You Say You Love Me (Prod.EFE1 X Malloy)</h4><h5>LMV</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen2}></img><h4>Dakiti ft. Jhay Cortez</h4><h5>Bad Bunny</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen3}></img><h4>Rauw Alejandro - Reloj (ft. Anuel AA)</h4><h5>Music Live</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen4}></img><h4>BANDIDO - MYKE TOWERS FT JUHN</h4><h5>TRAP x REGGAETON</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen5}></img><h4>CABRON Y VAGO - EL FANTASMA Y LOS DOS CARNALES.mp3</h4><h5>Manuel Garcia Espinosa 1</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen7}></img><h4>Wisin, Jhay Cortez - Fiel</h4><h5>The Real Music</h5><button className="boton9"></button></th>
                  </tr>
                </tbody>
            </table>
            <table className="table1">
                <tbody>
                  <tr>
                    <th className="portadaSong"><img src={Imagen6}></img><h4>Kevin Roldan Ft Bryant Myers y Lyanno - Hasta Abajo</h4><h5>Reggae Trap</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen8}></img><h4>COMO SI NADA - ADSO ALEJANDRO</h4><h5>Franco Dgk Escate Quispe</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen9}></img><h4>Jay Wheeler, DJ Nelson y Myke Towers - La Curiosidad</h4><h5>Jay Wheeler</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen12}></img><h4>Christian Nodal - Botella Tras Botella Ft. Gera MX - (LETRA_LYRICS) 2020(MP3_160K)_1.mp3</h4><h5>Joshua Mitchell</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen11}></img><h4>Ozuna, J Balvin, Chencho Corleone - Una Locura</h4><h5>Ozuna</h5><button className="boton9"></button></th>
                    <th className="portadaSong"><img src={Imagen10}></img><h4>DENVIX MUSIC CÓMO SE SIENTE REMIX - BAD BUNNY Y JHAY CORTEZ DENVIX RMX</h4><h5>DENVIX MUSIC</h5><button className="boton9"></button></th>
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