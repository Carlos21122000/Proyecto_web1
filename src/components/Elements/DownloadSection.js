import React from "react";
import "./DownloadSection.css";
import Imagen14 from "../../../images/descarga.jpg";
import Imagen15 from "../../../images/down1.png";
class DownloadSection extends React.Component {
  render() {
    return (
        <div className="DownloadSection">
          <div className="parte3">
            <table className="tableDow">
              <tbody>
                <tr>
                  <th className="imgDesc"><img src={Imagen14}></img></th>
                  <th className="descarga">
                    <p className="tituloDownload">Llévate la música contigo</p>
                    <img className="designDesc"src={Imagen15}></img>
                    <p className="EnunciadoDown">SoundCloud está disponible en Web, iOS, Android, Sonos, Chromecast y Xbox One.</p>  
                    <table className="tablebutDow">
                      <tbody>
                        <tr>
                          <th><a href="https://apps.apple.com/es/app/soundcloud/id336353151"><button className="AppStore"></button></a></th>
                          <th><a href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=es"><button className="PlayStore"></button></a></th>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
  };
};

export default  DownloadSection;