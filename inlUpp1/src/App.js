import {Component} from 'react';
import "./App.css";
import Header from './components/Header';
import Popup from './components/Popup'; 
import React, { useState } from 'react';
import PokeBild from './components/PokeBild';
import PokeName from './components/PokeName';



class App extends Component {  
 
  constructor(props) {
    super(props);
    this.state = {
      pokemons : [],
      pokemonDetails : [],
      offset: 100,
      maxPokemon: 102,
      showPopout: true,
      visa:true,
    }
  }
   

  

  togglePopup() {  
    this.setState({  
         showPopup: !this.state.showPopup  ,
         visa: false

        });  
     }   
     
     componentDidMount() {
      this.allPokemon();   
    }
    

  render() {
    
    const {pokemonDetails} = this.state;
    const PokemonList = pokemonDetails.map((pokemon) => {

      function Greeting(props) {
        const byt = props.byt;
          if (byt) { 
               return <PokeName pokemon={pokemon} />;                
              }  

              return (<PokeBild pokemon={pokemon} />);
        }

      return (
       <div>          
      <button onClick={this.togglePopup.bind(this)}> 
      <Greeting byt={this.state.visa} />
      </button>
  
      {this.state.showPopup ?  
      <Popup          
                    
                bild={  <img src={pokemon.sprites['front_default'] } /> } 
                bild2={  <img src={pokemon.sprites['back_default'] } /> } 
                
                name={"\n Name: "+pokemon.name+"\n " } 
                id={"\n ID: "+pokemon.id+"\n "  } 
                weight={"\n Weight: "+pokemon.weight+"\n " } 
                height={"\n Height: "+pokemon.height+"\n "}
                
                closePopup={this.togglePopup.bind(this)} /> : null 
               
      } </div> 
      
      ); //return
        }); //map
    
    return (      
      <div>
        <Header />
        <div className="container">
      
          <div className="card-columns"> {PokemonList} </div>
        </div>
      </div>
    );    
  } //render
  
   

 allPokemon() {   
  
     let url = "https://pokeapi.co/api/v2/pokemon?offset=" 
    + this.state.offset + "&limit=" 
    + this.state.maxPokemon;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results})

        this.state.pokemons.map(poke => {
          fetch(poke.url)
          .then(response => response.json())
          .then(data => {
            if (data) {
              var temp = this.state.pokemonDetails
              temp.push(data)
              this.setState({pokemonDetails: temp})
            }            
          })
          .catch(console.log)
        })
      }
    })
    .catch(console.log)

    
  }
 
} //app

export default App;
