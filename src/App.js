import { Component } from "react";
import './App.css';
import { Link } from 'react-router-dom';

import Header from "./components/Header";


export default class App extends Component {
  


  render() {

    return (
      <div class="background">
        <Header/>

      <section id="homePage">
        
        <Link to={`/calling-card`}>
        <div id="createBtn">
          <h1>Créer un nouvel avis de passage...</h1> 
        </div>
        </Link>

      </section>
      
      </div>
    )
  }
}