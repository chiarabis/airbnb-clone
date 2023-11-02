import React from 'react'
import acropolisImage from '../images/acropolis.jpg'
import cityImage from '../images/city.jpg'
import cultureImage from '../images/culture.jpg'
import guitarImage from '../images/guitar.jpg'
import spaghettiImage from '../images/spaghetti.jpg'
import swimImage from '../images/swim.jpg'
import peopleImage from '../images/young-people.jpg'
import musicImage from '../images/live-music.jpg'

export default function Main(){
    return (
        <section className='main'>
            <div className='grid-block'>
                <img src={acropolisImage} alt='acropolis'></img>
                <img src={cityImage} alt='city'></img>
                <img src={cultureImage} alt='culture'></img>
                <img src={guitarImage} alt='guitar'></img>
                <img src={spaghettiImage} alt='spaghetti'></img>
                <img src={swimImage} alt='swim'></img>
                <img src={peopleImage} alt='people'></img>
                <img src={musicImage} alt='live-music'></img>
            </div>
            <div className='intro'>
                <h2>Online Experiences</h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts — all without leaving home.</p>
            </div>
        </section>
    )
}