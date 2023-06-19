import React from 'react'
import logo from "../img/logo-clean3000-transparent.png";
import { Link } from 'react-router-dom';


const CallingCard = () => {
  return (
    <div className="CallingCard">

    <img id="logo" src={logo} alt=""/>
    <div id="print">

    <h1 className="title">Avis de Passage</h1>


<div id="displayContainer">
    <div id="CardDisplay">
        {/* <p>{this.state.Cards[0].name}</p> */}
        {/* <button onClick={() => this.logFunction()}> test </button> */}
        <div class="line">
            <p>Nom entreprise/ou client : </p>
            <p class="result"> -exemple- </p>
        </div>

        <div class="line">
            <p>Notre technicien est intervenu pour l'entretien de la vitrerie le </p>
            <p class="result"> -exemple- </p>
        </div>

        <div class="line">
            <p class="result">Observations : </p>
            <p class="result"> -exemple- </p>
        </div>

            <p>Merci de votre confiance.</p>

        <div className="signatures">
            <p>Signature du technicien :</p>
            <p>Signature du client / cachet de l'entreprise :</p>
        </div>
        <div className="signatures">
            <p class="result"> -exemple- </p>
            <p class="result"> -exemple- </p>
        </div>

    </div>
</div>
</div>

</div>
  )
}

export default CallingCard