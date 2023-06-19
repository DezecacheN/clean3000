import React from 'react'
import Header from './Header'
import { Component } from 'react';
import { Link } from 'react-router-dom';
import App from '../App'
import exemples from '../exemples';


export default class Create extends Component {

    state = {
        cards: [
            {
        
            }
        ]
      }


      
  printFunction() {
        const name= document.getElementById("name").value;
        const date= document.getElementById("date").value;
        const observ= document.getElementById("observ").value;
        const sign= document.getElementById("sign").value;



        const newCard= {
            
                id: Date.now(),
                name: name,
                date: date,
                observ: observ,
                sign: sign
            }
        ;

        const copyCards = [...this.state.cards];
        copyCards.push(newCard);


        // this.setState({
        //     cards: newCard,
        // })
        this.setState({ cards: newCard, }, () => {
            console.log(this.state);
            // navigate("/print");
          }); 
        
          console.log(this.state);


  }
    
render() {      
    

  return (
    <div class="background">
        <Header />

        <h1 class="title">Avis de Passage</h1>

        <section id="create">
            <form>
                <div className="formElmt">
                    <p>Nom entreprise / client :</p>
                    <input type="text" id="name" />
                </div>

                <div className="formElmt">
                    <p>Date d'intervention :</p>
                    <input type="date" id="date" />
                </div>

                <div className="formElmt">
                    <p>Observations :</p>
                    <input type="text" id="observ" />
                </div>

                <div className="formElmt">
                    <p>Signature :</p>
                    <input type="text" id="sign" />
                </div>

                <Link to={`/print`}>
                <input type="submit" value="Imprimer l'Avis de Passage" onClick={() => this.printFunction()} />
                </Link>




                {/* ---------------------------------------------------------- */}
                {/* boutons de secours */}



                {/* <Link to={`/print`}>
                    <p> aller àaiàad</p>
                </Link>

                <button type="button" onClick={() => this.printFunction()} >dadadadadada</button> */}



                {/* -------------------------------------------------------- */}

            </form>


        </section>


    

    </div>
  )
}
  }