import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Football from './Football'

class App extends Component {
  state = {
    error: '', 
    name: '', 
    image: ''
  }  
  handleButtonClick = e => {
    e.preventDefault();
    const API = 'http://api.football-data.org/v2/competitions/2002/teams'

    fetch(API, {
      headers:{
        //my personal key to this API
        'X-Auth-Token': '8cf26ca4deb64429900d6be7f0576025'
      }
    })
      .then(res => {
        if(res.ok) {
          return res;
        }
        throw Error("Nie udało się: Błąd nr " + res.status)
      })
      .then(res => res.json())
      .then(data => {
        //Drawing a random number from range 0-17, because there are 18 teams in German Bundesliga and we start counting from 0
        const random = Math.floor(Math.random()*18)
        this.setState({
          error: '',
          name: data.teams[random].name,
          image: data.teams[random].crestUrl
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Form 
        click={this.handleButtonClick}     
        />
        <Football 
        name={this.state.name}
        image={this.state.image}
        error={this.state.error}/>
      </div>
    );
  }
}

export default App;
