//import Header from '../Header.js';
import React, {Component} from "react";
import LoginSection from "./Elements/LoginSection";
import SongSection from "./Elements/SongSection";
import DownloadSection from "./Elements/DownloadSection";
import InformationSection from "./Elements/InformationSection";
import LastSection from "./Elements/LastSection";
import "./App.scss";

class App extends Component {
    render(){
        return(
            <div className="grid-container">
                <div className="LoginSection"><LoginSection/></div>
                <div className="SongSection"><SongSection /></div>
                <div className="DownloadSection"><DownloadSection/></div>
                <div className="InformationSection"><InformationSection/></div>
                <div className="LastSection"><LastSection/></div>
            </div>
        )
    }
}
export default App;
