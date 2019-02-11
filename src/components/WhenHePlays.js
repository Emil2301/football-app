import React, { Component } from 'react';
import './WhenHePlays.css'
import NextMatch from './NextMatch'

class WhenHePlays extends Component {
    state = { 
        value: '', 
        homeTeam: '',
        awayTeam: '',
        date: '',
        error: ''
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        });
        this.handleNextMatch(e.target.value)
    }
    handleNextMatch = (playerNumber) => {          
        //downloading the array of future matches of the team
        const API = `https://api.football-data.org/v2/teams/${playerNumber}/matches?status=SCHEDULED`

        fetch(API, {
            headers:{
                //my personal key to this API
                'X-Auth-Token': '8cf26ca4deb64429900d6be7f0576025'
            }
        })
            .then(res => {
                //if response.status is 200, then return response
                if(res.ok) {
                    return res;
                }
                throw Error("Nie udało się: Błąd nr " + res.status)
            })
            // get json out of response
            .then(res => res.json())
            .then(data => {
                const {homeTeam, awayTeam, utcDate} = data.matches[0];
                this.setState({
                    homeTeam: homeTeam.name,
                    awayTeam: awayTeam.name,
                    date: utcDate
                }) 
            })            
            .catch(err => {
                this.setState({
                    error: err
                })           
                console.log("Error number: " + err)
            })
    }
    render() { 
        const {value, homeTeam, awayTeam, date, error} = this.state
        return ( 
            <form>                           
                <select 
                onChange={this.handleChange}
                value={this.state.value}
                >	                
                    <option value=''>Choose the player</option>
                    <option value='5'>Robert Lewandowski</option>
                    <option value='340'>Jan Bednarek</option>
                    <option value='98'>Krzysztof Piątek</option>
                    <option value='113'>Arkadiusz Milik</option>
                    <option value='584'>Karol Linetty</option>                    
                    <option value='4'>Łukasz Piszczek</option>                    
                    <option value='341'>Mateusz Klich</option>                    
                    <option value='322'>Kamil Grosicki</option>           
                </select>
                <NextMatch value ={value} homeTeam={homeTeam} awayTeam={awayTeam} date={date} error={error}/>  
            </form>         
        );
    }
}
 
export default WhenHePlays;