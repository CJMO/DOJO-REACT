import React, { Component } from 'react';
import axios from 'axios';
const url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";

class App extends Component {

 /* Props: propeidades/variables definidos por el sistema */
  constructor(props){
    /* Darle accesibilidad a todo el programa para dichas variables */
    super(props)
    this.state= {
      inputText : '',
      outputText: ''
    }
    /* Bind: enlazar referencia (this) a función que se ejecutará */
    this.cambiarTexto = this.cambiarTexto.bind(this)
  }

  cambiarTexto(event){
    var nombre = event.target.value
    this.setState('outputText': nombre)
    this.setState('inputText': nombre)
  }

  render(){
    return(
      <div>
        <App />
        <NASA />
      </div>,
      document.getElementById('root')
    )
  }

}

class NASA extends component {

  constructor(props){
    /* Darle accesibilidad a todo el programa para dichas variables */
    super(props)
    this.state= {
      urlImagen : ''
    }
    /* Bind: enlazar referencia (this) a función que se ejecutará */
    this.obtenerImagen = this.obtenerImagen.bind(this)
  }

  obtenerImagen(event){
    var self = this
    axios.get(url)
    .then( function(response){
      console.log('URL imágen ', response.data.url);
      self.setState({urlImagen:response.data.url})
    } )
    .catch( function(error){

    } )
  }

  render(){
    return(
      <div>
        <img src={this.state.urlImagen} />
        <br/>
        <button onClick={this.obtenerImagen}>OBTENER IMÁGEN</button>
      </div>
    )
  }

}

export {App, NASA}
