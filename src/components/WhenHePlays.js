import React, { Component } from 'react';
import './WhenHePlays.css'
import NextMatch from './NextMatch'
import { css } from '@emotion/core';
// First way to import
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class WhenHePlays extends Component {
    state = {
        value: '',
        homeTeam: '',
        awayTeam: '',
        date: '',
        error: '',
        loading: false
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
            headers: {
                //my personal key to this API
                'X-Auth-Token': '8cf26ca4deb64429900d6be7f0576025'
            }
        })
            .then(res => {
                this.setState({
                    loading: true
                })
                //if response.status is 200, then return response
                if (res.ok) {
                    return res;
                }
                throw Error("Nie udało się: Błąd nr " + res.status)
            })
            // get json out of response
            .then(res => res.json())
            .then(data => {
                this.setState({
                    loading: false
                })
                const { homeTeam, awayTeam, utcDate } = data.matches[0];
                this.setState({
                    homeTeam: homeTeam.name,
                    awayTeam: awayTeam.name,
                    date: utcDate
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: err,
                    loading: false
                })
            })
    }
    render() {
        const { value, homeTeam, awayTeam, date, error } = this.state
        return (
            <>
                <div className='sweet-loading'>
                    <ClipLoader
                        css={override}
                        sizeUnit={"px"}
                        size={150}
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
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
                    <NextMatch value={value} homeTeam={homeTeam} awayTeam={awayTeam} date={date} error={error} />
                </form>
            </>

        );
    }
}

export default WhenHePlays;