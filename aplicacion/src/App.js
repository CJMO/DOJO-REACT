import React, { Component } from 'react';

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
      <div className="App">
        <input type="text" onChange={this.cambiarTexto} value={this.state.inputText}/>
        <a>Hola {this.state.outputText} cómo estás?</a>
      </div>
    )
  }

}

export default App;
