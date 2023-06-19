import { Component } from "react";
import '../App.css';
import logo from "../img/logo-clean3000-transparent.png";

import Header from "../components/Header";

// import {name} from "./Create";

export default class App extends Component {

  render() {

    return (
        <div id="print">

            <img id="logo" src={logo} alt=""/>

            <h1>Avis de Passage</h1>



            <div>

                <p>Nom entreprise/ou client : </p>
                <p>Notre technicien est intervenu pour l'entretien de la vitrerie le .....................</p>
                <p>Observations :</p>
                <p>Merci de votre confiance.</p>
                <div>
                    <p>Signature du technicien :</p>
                    <p>Signature du client / cachet de l'entreprise :</p>
                </div>
                <div>


                </div>
            </div>
        </div>
    )
  }
}