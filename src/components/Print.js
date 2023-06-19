import { Component } from "react";
import '../App.css';
import logo from "../img/logo-clean3000-transparent.png";

import Header from "../components/Header";
import Create from "./Create";
import CallingCard from "./CallingCard";

// import {name} from "./Create";

export default class Print extends Component {


    logFunction() {
        const name= document.getElementById("name").value;

        console.log(this)

  }

  render() {
    


    return (
        <div>

            <CallingCard/>
            <CallingCard/>
            <CallingCard/>

        </div>
    )
  }
}