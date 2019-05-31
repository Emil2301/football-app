import React, { Component } from 'react';
import Form from './Form'
import Football from './Football'
import './DisplayLogo.css'
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class DisplayLogo extends Component {
  state = {
    error: '',
    name: '',
    image: '',
    loading: false
  }
  handleButtonClick = e => {
    //download the data of german Bundesliga teams
    const API = 'https://api.football-data.org/v2/competitions/2002/teams'

    fetch(API, {
      headers: {
        //my personal key to this API
        'X-Auth-Token': '8cf26ca4deb64429900d6be7f0576025'
      }
    })
      .then(res => {
        this.setState({ loading: true });
        if (res.ok) {
          return res;
        }
        throw Error("Nie udało się: Błąd nr " + res.status)
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ loading: false });
        //Drawing a random number from range 0-17, because there are 18 teams in German Bundesliga and we start counting from 0
        const random = Math.floor(Math.random() * 18)
        this.setState({
          error: '',
          name: data.teams[random].name,
          image: data.teams[random].crestUrl
        })
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false
        })
      })
  }
  render() {
    return (
      <div className="App">
        <Form
          click={this.handleButtonClick}
        />
        <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={100}
            color={'#123abc'}
            loading={this.state.loading}
          />
        </div>
        <Football
          name={this.state.name}
          image={this.state.image}
          error={this.state.error} />
      </div>
    );
  }
}

export default DisplayLogo;
